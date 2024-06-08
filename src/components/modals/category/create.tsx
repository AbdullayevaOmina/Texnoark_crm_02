"use client";
import { useCategoryStore } from "@store";
import { CreateCategory } from "@category-interface";
import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { Form } from "formik";
import { schemaCatgory } from "@validations";

export function CreateCategoryModal() {
  const [openModal, setOpenModal] = useState(false);
  const { create } = useCategoryStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (values: CreateCategory) => {
    const status = await create(values);
    if (status === 201) {
      setOpenModal(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Create Category</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Create Category
            </h3>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={schemaCatgory}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field
                    name="name"
                    as={TextInput}
                    placeholder="Category Name"
                    helperText={
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-[red]"
                      />
                    }
                  />
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
