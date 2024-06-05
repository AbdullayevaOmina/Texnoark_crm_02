"use client";
import { Table } from "flowbite-react";
import { useCategoryStore } from "@store";
import { useEffect } from "react";
import { editIcon } from "@global-icons";
import { CreateCategoryModal, DeleteCategoryModal } from "@modals";

const TableHeader = [{ key: "name", value: "Category Name" }];

const Index = () => {
  const { data, isLoading, getAll, update, deleteCategory } =
    useCategoryStore();
  useEffect(() => {
    getAll();
  }, [update, deleteCategory]);

  return (
    <div className="p-4 md:pl-[275px] w-full h-auto pt-20">
      <div className="flex justify-end mb-3">{<CreateCategoryModal />}</div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            {TableHeader.map((item, index) => (
              <Table.HeadCell key={index}>{item.value}</Table.HeadCell>
            ))}
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {!isLoading &&
              data.map((row, rowIndex) => (
                <Table.Row
                  key={rowIndex}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  {TableHeader.map((header, cellIndex) => (
                    <Table.Cell key={cellIndex}>{row[header.key]}</Table.Cell>
                  ))}
                  <Table.Cell className=" flex gap-3">
                    <button className="">{editIcon}</button>
                    <DeleteCategoryModal id={row.id} />
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Index;
