import { useProductsStore } from "@store";
import {
  CreateProductModal,
  DeleteProductModal,
  UpdateProductModal,
} from "@modals";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalPagination, TableSkeleton } from "@ui";
import { setDataToCookie } from "@cookie";
import { eyeIcon } from "@global-icons";

const TableHeader = [
  { key: "name", value: "Product Name" },
  { key: "price", value: "Price ($)" },
];

const Index = () => {
  const { data, isLoading, getAll, totalCount } = useProductsStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [params, setParams] = useState({ page: 1, limit: 10, search: search });

  useEffect(() => {
    getAll(params);
  }, [params, search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const pageNumber = page ? parseInt(page) : 1;
    const search = params.get("search") || "";
    setSearch(search);
    setParams((prevParams) => ({
      ...prevParams,
      page: pageNumber,
      search: search,
    }));
  }, [location.search]);

  const changePage = (value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value,
    }));
  };

  return (
    <div className="p-4 md:pl-[275px] w-full h-[100vh] pt-20">
      <div className="flex justify-end mb-3">
        <CreateProductModal />
      </div>
      <div className="overflow-x-auto w-full">
        <Table hoverable>
          <Table.Head>
            {TableHeader.map((item) => (
              <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
            ))}
            <Table.HeadCell />
          </Table.Head>
          <Table.Body className="divide-y">
            {!isLoading ? (
              data.map((row) => (
                <Table.Row
                  key={row.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  {TableHeader.map((header) => (
                    <Table.Cell key={header.key}>
                      {header.key === "description"
                        ? `${row[header.key].substring(0, 30)} ...`
                        : row[header.key]}
                    </Table.Cell>
                  ))}
                  <Table.Cell className="flex gap-3">
                    <button
                      onClick={() => {
                        setDataToCookie("product_id", row.id);

                        navigate(`product=${row.id}`);
                        window.location.reload();
                      }}
                      className="hover:text-blue-700"
                    >
                      {eyeIcon}
                    </button>
                    <UpdateProductModal product={row} />
                    <DeleteProductModal id={row.id} />
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <TableSkeleton />
            )}
          </Table.Body>
        </Table>
        {totalCount > 1 && (
          <GlobalPagination
            currentPage={params.page}
            totalPages={totalCount}
            onPageChange={changePage}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
