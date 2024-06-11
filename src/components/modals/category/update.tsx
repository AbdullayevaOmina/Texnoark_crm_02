"use client";
import { useCategoryStore } from "@store";
import { CreateCategory } from "@category-interface";
import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { Form } from "formik";
import { schemaCatgory } from "@validations";
import { editIcon } from "@global-icons";

export function UpdateCategoryModal({ category }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { update } = useCategoryStore();

  const handleSubmit = async (values: CreateCategory) => {
    const data = { id: category.id, data: { name: values.name } };
    const status = await update(data);
    if (status === 200) {
      console.log(status);
      setOpenModal(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>{editIcon}</button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Update Category
            </h3>
            <Formik
              initialValues={{
                name: category.name,
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
                        component="small"
                        className="text-[red]"
                      />
                    }
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Spinner aria-label="Submitting" size="md" />{" "}
                        Updating...
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
