"use client";
import { useProductDetailStore } from "@store";
import { deleteIcon2 } from "@global-icons";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function DeleteProductDetailModal({ id }: any) {
  const [openModal, setOpenModal] = useState(false);
  const { deleteProduct } = useProductDetailStore();

  const handleDelete = async (e: any) => {
    e.preventDefault();
    console.log(id);

    try {
      const responseStatus = await deleteProduct(id);
      if (responseStatus === 200) {
        setOpenModal(false);
      }
    } catch (error) {
      console.error("Delete product Detail error:", error);
    }
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="hover:text-red-600">
        {deleteIcon2}
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
              Are you sure you want to delete this product detail?
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
