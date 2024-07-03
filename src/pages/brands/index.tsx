import { useBrandStore } from "@store";
import {
  CreateBrandCategoryModal,
  CreateBrandModal,
  DeleteBrandModal,
  UpdateBrandModal,
} from "@modals";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalPagination, TableSkeleton } from "@ui";
import { setDataToCookie } from "@cookie";
import { eyeIcon } from "@global-icons";

const TableHeader = [
  { key: "name", value: "Brand Name" },
  { key: "description", value: "Description" },
];

const Index = () => {
  const { data, isLoading, getAll, totalCount } = useBrandStore();
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
        <CreateBrandModal />
      </div>
      <div className="overflow-x-auto w-full">
        <Table hoverable>
          <Table.Head>
            {TableHeader.map((item) => (
              <Table.HeadCell key={item.key}>{item.value}</Table.HeadCell>
            ))}
            <Table.HeadCell />
          </Table.Head>
          <Table.Body className="divide-y text-black dark:text-white lg:text-[18px]">
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
                        setDataToCookie("brand_id", row.id);
                        setDataToCookie("brand_name", row.name);
                        navigate(`brand=${row.id}`);
                        window.location.reload();
                      }}
                      className="hover:text-blue-700"
                    >
                      {eyeIcon}
                    </button>
                    <CreateBrandCategoryModal />
                    <UpdateBrandModal brand={row} />
                    <DeleteBrandModal id={row.id} />
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
