import {
  CreateBrandCategoryModal,
  UpdateBrandCategoryModal,
  DeleteBrandCategoryModal,
} from "@modals";
import { getDataFromCookie } from "@cookie";
import { useBCStore } from "@store";
import { Spinner, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalPagination } from "@ui";

const TableHeader = [{ key: "name", value: "Name" }];

const SingleBrand = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const brand_id = getDataFromCookie("brand_id");
  const brand_name = getDataFromCookie("brand_name");
  const { data_bc, getAll_bcs, totalCount, isLoading } = useBCStore();
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    id: brand_id,
  });

  useEffect(() => {
    const fetchData = async () => {
      await getAll_bcs(params);
    };
    fetchData();
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
      {isLoading ? (
        <div className="mt-16 text-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">{brand_name}</h1>
            <CreateBrandCategoryModal brand_id={brand_id} buttonTip={true} />
          </div>
          {data_bc.length !== 0 ? (
            <div className="overflow-x-auto mt-5">
              <Table>
                <Table.Head>
                  {TableHeader.map((item, index) => (
                    <Table.HeadCell key={index}>{item.value}</Table.HeadCell>
                  ))}
                  <Table.HeadCell />
                </Table.Head>
                <Table.Body className="divide-y">
                  {data_bc.map((row, rowIndex) => (
                    <Table.Row
                      key={rowIndex}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      {TableHeader.map((header, cellIndex) => (
                        <Table.Cell key={cellIndex}>
                          {row[header.key]}
                        </Table.Cell>
                      ))}
                      <Table.Cell className="flex gap-3">
                        <UpdateBrandCategoryModal
                          id={row.id}
                          data={{
                            name: row.name,
                            brand_id: +brand_id,
                          }}
                        />
                        <DeleteBrandCategoryModal id={row.id} />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              {totalCount > 1 && (
                <GlobalPagination
                  totalPages={totalCount}
                  currentPage={params.page}
                  onPageChange={changePage}
                />
              )}
            </div>
          ) : (
            <h1 className="text-center text-2xl mt-20 text-gray-500">
              There are no subcategories yet
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleBrand;
