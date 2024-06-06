"use client";
import { Pagination, Table } from "flowbite-react";
import { useCategoryStore } from "@store";
import { useEffect, useState } from "react";
import {
  CreateCategoryModal,
  DeleteCategoryModal,
  UpdateCategoryModal,
} from "@modals";
// import { useLocation } from "react-router-dom";
import { TableSkeleton } from "@ui";

const TableHeader = [{ key: "name", value: "Category Name" }];

const Index = () => {
  const { data, isLoading, getAll } = useCategoryStore();
  // const location = useLocation();
  const [params, setParams] = useState({ page: 1, limit: 10, search: "" });

  useEffect(() => {
    getAll(params);
  }, [params]);

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="p-4 md:pl-[275px] w-full h-auto pt-20">
      <div className="flex justify-end mb-3">{<CreateCategoryModal />}</div>
      <div className="overflow-x-auto w-full">
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
            {!isLoading ? (
              data.map((row, rowIndex) => (
                <Table.Row
                  key={rowIndex}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  {TableHeader.map((header, cellIndex) => (
                    <Table.Cell key={cellIndex}>{row[header.key]}</Table.Cell>
                  ))}
                  <Table.Cell className="flex gap-3">
                    <UpdateCategoryModal category={row} />
                    <DeleteCategoryModal id={row.id} />
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <TableSkeleton />
            )}
          </Table.Body>
        </Table>
          <Pagination
            currentPage={currentPage}
            totalPages={2}
            onPageChange={onPageChange}
          />
      </div>
    </div>
  );
};

export default Index;
