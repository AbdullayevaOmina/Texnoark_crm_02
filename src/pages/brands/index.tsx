import { useBrandStore } from "@store";
import { editIcon } from "@global-icons";
import { CreateBrandModal, DeleteBrandModal, UpdateBrandModal } from "@modals";
import { Table } from "flowbite-react";
import { useEffect } from "react";

const TableHeader = [
  { key: "file", value: "Img" },
  { key: "name", value: "Category Name" },
  { key: "description", value: "description" },
];

const index = () => {
  const { data, isLoading, getAll, update, deleteBrand } = useBrandStore();
  useEffect(() => {
    getAll({ page: 1, limit: 10 });
  }, [update, deleteBrand]);

  return (
    <div className="p-4 md:pl-[275px] w-ful h-auto pt-20">
      <div className="flex justify-end mb-3">{<CreateBrandModal />}</div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            {TableHeader.map((item, index) => (
              <Table.HeadCell key={index}>{item.value}</Table.HeadCell>
            ))}
            <Table.HeadCell>
              <span className="sr-only">
                <UpdateBrandModal />
              </span>
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
                    <DeleteBrandModal id={row.id} />
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default index;
