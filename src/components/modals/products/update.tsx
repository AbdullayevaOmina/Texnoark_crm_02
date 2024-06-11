"use client";
import React, { useState, useEffect } from "react";
import {
  useCategoryStore,
  useBrandStore,
  useBCStore,
  useProductsStore,
} from "@store";
import { Button, Modal, Select, Spinner, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { schemaProductupdate } from "@validations";
import { CreateProduct } from "@products-interface";
import { editIcon } from "@global-icons";

export function UpdateProductModal({ product }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { data: categories, getAll: getAllCategories } = useCategoryStore();
  const { data: brands, getAllBrandByCategoryId } = useBrandStore();
  const { update } = useProductsStore();
  const { data_bc: brandCategories, getAll_bcs: getBrandCategories } =
    useBCStore();
  const [categoryError, setCategoryError] = useState<any>("");

  function onCloseModal() {
    setOpenModal(false);
    setCategoryError("");
  }

  useEffect(() => {
    if (openModal) {
      getAllCategories({ limit: 100, page: 1, search: "" }).catch((error) => {
        setCategoryError(error.message);
      });
    }
  }, [openModal, getAllCategories]);

  const initialValues: CreateProduct = {
    name: product.name,
    price: product.price,
    category_id: product.category_id,
    brand_category_id: product.brand_category_id,
    brand_id: product.brand_id,
  };

  const handleSubmit = async (values: CreateProduct) => {
    console.log(values);

    const payload: any = {
      ...values,
      category_id: +values.category_id,
      brand_category_id: +values.brand_category_id,
      brand_id: +values.brand_id,
    };
    console.log(payload);
    // update(payload);
    // setOpenModal(false);
  };

  const handleCategory = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(e.target.value, 10);
    await getAllBrandByCategoryId({ page: 1, limit: 100, id: id });
    setCategoryError("");
  };

  const handleBrand = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(e.target.value, 10);
    await getBrandCategories({ page: 1, limit: 100, id: id });
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>{editIcon}</button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center">
              Update Product
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={schemaProductupdate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-2">
                  <Field name="category_id">
                    {({ field }: any) => (
                      <div>
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
                          onChange={(e) => {
                            field.onChange(e);
                            handleCategory(e);
                          }}
                        >
                          <option selected disabled>
                            Select Category
                          </option>
                          {categories.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </Select>
                        {categoryError && (
                          <ErrorMessage
                            name="category_id"
                            component="div"
                            className="text-red-500"
                          >
                            {categoryError}
                          </ErrorMessage>
                        )}
                      </div>
                    )}
                  </Field>

                  <Field name="brand_id">
                    {({ field }: any) => (
                      <Select
                        {...field}
                        placeholder="Select Brand"
                        helperText={
                          <ErrorMessage
                            name="brand_id"
                            component="small"
                            className="text-[red]"
                          />
                        }
                        onChange={(e) => {
                          field.onChange(e);
                          handleBrand(e);
                        }}
                      >
                        <option selected disabled>
                          Select Brand
                        </option>
                        {brands.map((item) => (
                          <option
                            selected={item.id === product.brand_id}
                            key={item.id}
                            value={
                              item.id === product.brand_id
                                ? product.brand_id
                                : item.id
                            }
                          >
                            {item.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>

                  <Field name="brand_category_id">
                    {({ field }: any) => (
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
                        {brandCategories.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>

                  <Field name="name">
                    {({ field }: any) => (
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
                    {({ field }: any) => (
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
