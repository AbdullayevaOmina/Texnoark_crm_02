"use client";
import  { useState } from "react";

import { Button, Modal, Select, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { schemaProductupdate } from "@validations";
import { CreateProduct } from "@products-interface";
import { editIcon2 } from "@global-icons";

export function UpdateProductDetailModal() {
  const [openModal, setOpenModal] = useState(false);


  function onCloseModal() {
    setOpenModal(false);
  }
  const initialValues = {
    name:""
  };

  const handleSubmit = async (values: CreateProduct) => {
    console.log(values);
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
              validationSchema={schemaProductupdate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form></Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
