"use client";
import { useCategoryStore, useBrandStore, useProductsStore } from "@store";
import {
  Button,
  FileInput,
  Modal,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { schemaProduct } from "@validations";

export function CreateProductModal() {
  const [openModal, setOpenModal] = useState(false);
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const { data, getAll } = useCategoryStore();

  function onCloseModal() {
    setOpenModal(false);
    setImgPreview(null);
  }

  useEffect(() => {
    if (openModal) {
      getAll({ limit: 1000, page: 1, search: "" });
    }
  }, [openModal, getAll]);

  const initialValues = {
    name: "",
    price: null,
    // category_id: 0,
    // brand_category_id: 0,
    // brand_id: 0,
  };

  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Create Product</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Create Product
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaProduct}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="grid gap-2">
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

                  <Field name="category_id">
                    {({ field }: { field: any }) => (
                      <Select
                        {...field}
                        placeholder="Select Brand"
                        helperText={
                          <ErrorMessage
                            name="category_id"
                            component="small"
                            className="text-[red]"
                          />
                        }
                      >
                        <option selected disabled>
                          Select Brand
                        </option>
                        {data.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>

                  <Field name="brand_category_id">
                    {({ field }: { field: any }) => (
                      <Select
                        {...field}
                        placeholder="Select Brand Category"
                        helperText={
                          <ErrorMessage
                            name="brand_category_id"
                            component="small"
                            className="text-[red]"
                          />
                        }
                      >
                        <option selected disabled>
                          Select Brand Category
                        </option>
                        {data.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>

                  <Field name="name">
                    {({ field }: { field: any }) => (
                      <TextInput
                        {...field}
                        placeholder="Product Name"
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
                  <Field name="price">
                    {({ field }: { field: any }) => (
                      <TextInput
                        {...field}
                        placeholder="Price ($)"
                        type="number"
                        helperText={
                          <ErrorMessage
                            name="price"
                            component="small"
                            className="text-[red]"
                          />
                        }
                      />
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
