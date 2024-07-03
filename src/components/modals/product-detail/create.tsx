"use client";
import { useProductDetailStore } from "@store";
import {
  Button,
  FileInput,
  Modal,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { schemaProductDetail } from "@validations";
import { CreateProductDetail } from "@product-detail-interface";

export function CreateProductDetailModal({ product_id }: any) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { create } = useProductDetailStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const initialValues: CreateProductDetail = {
    quantity: null,
    description: "",
    files: [],
    product_id: parseInt(product_id),
    colors: "",
    discount: null,
  };

  const handleSubmit = async (values: CreateProductDetail) => {
    const formData: any = new FormData();
    selectedFiles.forEach((file) => formData.append("files", file));
    formData.append("quantity", values.quantity?.toString() || "");
    formData.append("description", values.description);
    formData.append("product_id", values.product_id.toString());
    formData.append("colors", values.colors);
    formData.append("discount", values.discount?.toString() || "");
    const resStatus = await create(formData);
    if (resStatus === 201) onCloseModal();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Create Product Detail</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Create Product Detail
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaProductDetail}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field
                    name="quantity"
                    type="number"
                    as={TextInput}
                    placeholder="quantity"
                    helperText={
                      <ErrorMessage
                        name="quantity"
                        component="small"
                        className="text-[red]"
                      />
                    }
                  />

                  <Field
                    name="discount"
                    type="number"
                    as={TextInput}
                    placeholder="discount"
                    helperText={
                      <ErrorMessage
                        name="discount"
                        component="small"
                        className="text-[red]"
                      />
                    }
                  />
                  <Field
                    name="colors"
                    as={TextInput}
                    placeholder="Colors: red, blue, yellow, black"
                    helperText={
                      <ErrorMessage
                        name="colors"
                        component="small"
                        className="text-[red]"
                      />
                    }
                  />

                  <Field
                    name="description"
                    as={Textarea}
                    placeholder="description"
                    helperText={
                      <ErrorMessage
                        name="description"
                        component="small"
                        className="text-[red]"
                      />
                    }
                  />

                  <FileInput
                    multiple
                    onChange={handleFileChange}
                    className="mb-2"
                  />
                  <div className="flex flex-wrap gap-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Selected file ${index + 1}`}
                          className="w-[110px] h-[110px] object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
                        >
                          <span className="mb-1">&times;</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Spinner aria-label="Submitting" size="md" />
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
