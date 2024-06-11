import {
  DeleteSubCategoryModal,
  UpdateSubCategoryModal,
  CreateSubCategoryModal,
} from "@modals";
import { getDataFromCookie } from "@cookie";
import { useCategoryStore, useSubCategoryStore } from "@store";
import { Spinner, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalPagination } from "@ui";

const TableHeader = [{ key: "name", value: "Name" }];

const SingleCategorie = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const parent_category_id = getDataFromCookie("parent_category_id");
  const { get, isLoading, totalCount } = useCategoryStore();
  const { getAll, subData } = useSubCategoryStore();
  const [data, setData] = useState<any>({});
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
    search: search,
    parent_category_id: parent_category_id,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await get(parent_category_id);
      setData(res);
      await getAll(params);
    };
    fetchData();
  }, [parent_category_id, get, getAll, params]);

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
            <h1 className="text-xl">{data.name}</h1>
            <CreateSubCategoryModal
              parent_category_id={parent_category_id}
              buttonTip={true}
            />
          </div>
          {subData.length !== 0 ? (
            <div className="overflow-x-auto mt-5">
              <Table>
                <Table.Head>
                  {TableHeader.map((item, index) => (
                    <Table.HeadCell key={index}>{item.value}</Table.HeadCell>
                  ))}
                  <Table.HeadCell />
                </Table.Head>
                <Table.Body className="divide-y">
                  {subData.map((row, rowIndex) => (
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
                        <UpdateSubCategoryModal
                          id={row.id}
                          data={{
                            name: row.name,
                            parent_category_id: +parent_category_id,
                          }}
                        />
                        <DeleteSubCategoryModal id={row.id} />
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

export default SingleCategorie;
