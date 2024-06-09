"use client";
import { useCategoryStore, useBrandStore } from "@store";
import { CreateBrand } from "@brands-interface";
import {
  Button,
  FileInput,
  Modal,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useState, useEffect } from "react";
import { schemaBrand } from "@validations";

export function CreateBrandModal() {
  const [openModal, setOpenModal] = useState(false);
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const { data, getAll } = useCategoryStore();
  const { create } = useBrandStore();

  function onCloseModal() {
    setOpenModal(false);
    setImgPreview(null);
  }

  useEffect(() => {
    if (openModal) {
      getAll({ limit: 1000, page: 1, search: "" });
    }
  }, [openModal, getAll]);

  const initialValues: CreateBrand = {
    name: "",
    description: "",
    category_id: null,
    file: undefined,
  };

  const handleSubmit = async (
    values: CreateBrand,
    { setSubmitting }: FormikHelpers<CreateBrand>
  ) => {
    try {
      const formData: any = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("category_id", values.category_id);
      if (values.file) {
        formData.append("file", values.file);
      }

      const res = await create(formData);
      console.log(res);
      // Add your logic here to handle the response
      setOpenModal(false);
    } catch (error) {
      console.error(error);
      // Handle the error here
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Create Brand</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Create Brand
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaBrand}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="grid gap-2">
                  <Field name="name">
                    {({ field }: { field: any }) => (
                      <TextInput
                        {...field}
                        placeholder="Brand Name"
                        helperText={
                          <ErrorMessage
                            name="name"
                            component="small"
                            className="text-[red]"
                          />
                        }
                      />
                    )}
                  </Field>
                  <Field name="description">
                    {({ field }: { field: any }) => (
                      <TextInput
                        {...field}
                        placeholder="Description"
                        helperText={
                          <ErrorMessage
                            name="description"
                            component="small"
                            className="text-[red]"
                          />
                        }
                      />
                    )}
                  </Field>
                  <Field name="category_id">
                    {({ field }: { field: any }) => (
                      <Select
                        {...field}
                        placeholder="Select Category"
                        helperText={
                          <ErrorMessage
                            name="category_id"
                            component="small"
                            className="text-[red]"
                          />
                        }
                      >
                        <option selected disabled>
                          Select Category
                        </option>
                        {data.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>
                  <Field name="file">
                    {({ field }: { field: any }) => (
                      <div>
                        <FileInput
                          accept="image/*"
                          onChange={(event) => {
                            if (
                              event.currentTarget.files &&
                              event.currentTarget.files[0]
                            ) {
                              const file = event.currentTarget.files[0];
                              setFieldValue("file", file);

                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setImgPreview(reader.result as string);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                        {imgPreview && (
                          <div className="w-full flex justify-center my-3">
                            <img
                              src={imgPreview}
                              className="w-[120px] mt-[10px]"
                              alt="Preview"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner aria-label="Submitting" size="md" />{" "}
                        Creating...
                      </>
                    ) : (
                      "Create"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
