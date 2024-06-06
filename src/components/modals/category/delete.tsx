"use client";
import { useCategoryStore } from "@store";
import { deleteIcon } from "@global-icons";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function DeleteCategoryModal({ id }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { deleteCategory } = useCategoryStore();

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      const responseStatus = await deleteCategory(id);
      if (responseStatus === 200) {
        setOpenModal(false);
      }
    } catch (error) {
      console.error("Delete category error:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600"
      >
        {deleteIcon}
        Delete
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this category?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
