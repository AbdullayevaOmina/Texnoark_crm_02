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
import { CreateProductDetailData } from "@product-detail-interface";
import { editIcon2 } from "@global-icons";

export function UpdateProductDetailModal({ product_detail }: any) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { create, update } = useProductDetailStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const initialValues: CreateProductDetailData = {
    quantity: null,
    description: "",
    product_id: 0,
    colors: "",
    discount: null,
  };

  const handleSubmit = async (values: CreateProductDetailData) => {
    const payload:any = { ...values };
    const res = await create(payload);

    if (res.status === 201) setOpenModal(false);
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
      <button onClick={() => setOpenModal(true)}>{editIcon2}</button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Update Product Detail
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
                      "Update"
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
