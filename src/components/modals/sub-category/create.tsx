"use client";
import { useSubCategoryStore } from "@store";
import { CreateSubCategory } from "@category-interface";
import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { Form } from "formik";
import { schemaCatgory } from "@validations";
import { plusIcon } from "@global-icons";

export function CreateSubCategoryModal({ parent_category_id, buttonTip }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { create } = useSubCategoryStore();

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleSubmit = async (values: CreateSubCategory) => {
    const payload = { ...values, parent_category_id: +parent_category_id };
    const status = await create(payload);
    if (status === 201) {
      setOpenModal(false);
    }
  };

  return (
    <>
      {buttonTip ? (
        <Button onClick={() => setOpenModal(true)}>Create Sub Category</Button>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className="hover:text-lime-500"
        >
          {plusIcon}
        </button>
      )}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Create Sub Category
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
                    placeholder="Name"
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
