"use client";
import { useBrandStore } from "@store";
import { CreateBrand } from "@brands-interface";
import { Button, Modal, Select, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { Form } from "formik";
import { schemaCatgory } from "@validations";
import { editIcon } from "@global-icons";

export function UpdateBrandModal() {
  const [openModal, setOpenModal] = useState(false);
  const { data } = useBrandStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const initialValues: CreateBrand = {
    name: "",
    description: "",
    category_id: null,
    file: undefined,
  };

  const handleSubmit = async (values: CreateBrand) => {
    console.log(values);
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
      >
        {editIcon}
        Edit
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Update Brand
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaCatgory}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field
                    name="name"
                    as={TextInput}
                    placeholder="Brand Name"
                    helperText={
                      <ErrorMessage
                        name="name"
                        component="small"
                        className="text-[red]"
                      />
                    }
                  />
                  <Field
                    name="description"
                    as={TextInput}
                    placeholder="Description"
                    helperText={
                      <ErrorMessage
                        name="description"
                        component="small"
                        className="text-[red]"
                      />
                    }
                  />
                  <Field
                    name="category_id"
                    type="number"
                    as={Select}
                    placeholder="Category ID"
                    helperText={
                      <ErrorMessage
                        name="category_id"
                        component="small"
                        className="text-[red]"
                      />
                    }
                  >
                    {data.map((item, _) => (
                      <option key={_} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Field>

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner aria-label="Submitting" size="md" />{" "}
                        ...Updating
                      </>
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
