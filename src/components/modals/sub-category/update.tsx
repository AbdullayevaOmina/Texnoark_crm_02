"use client";
import { useSubCategoryStore } from "@store";
// import { UpdateSubCategory } from "@category-interface";
import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { Form } from "formik";
import { schemaCatgory } from "@validations";
import { editIcon } from "@global-icons";

export function UpdateSubCategoryModal({ id, data }: { id: any; data: any }) {
  const [openModal, setOpenModal] = useState(false);
  const { update } = useSubCategoryStore();

  const handleSubmit = async (values: any) => {
    const payload = {
      id: id,
      data: { ...data, name: values.name },
    };
    const status = await update(payload);
    if (status === 200) {
      // Status for a successful update is typically 200
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
              Update Sub Category
            </h3>
            <Formik
              initialValues={{
                name: data.name,
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
