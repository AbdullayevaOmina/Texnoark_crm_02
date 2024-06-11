import { editIcon2 } from "@global-icons";
import { useProductsStore } from "@store";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  CreateProductDetailModal,
  DeleteProductDetailModal,
  UpdateProductDetailModal,
} from "@modals";

const SingleProduct = () => {
  const product_id = localStorage.getItem("product_id");
  const [productData, setProductData] = useState<any>([]);
  const [productDetailData, setProductDetailData] = useState<any>([]);

  const { get } = useProductsStore();

  useEffect(() => {
    async function fetchData() {
      const res = await get(product_id);
      setProductData(res.product);
      setProductDetailData(res.product_detail);
    }
    if (product_id) {
      fetchData();
    }
  }, [product_id]);

  console.log(productDetailData);

  return (
    <div className="p-4 md:pl-[275px] w-full h-[100vh] pt-20">
      {productDetailData && productDetailData.images ? (
        <div>
          <div className="flex flex-col md:flex-row mt-6 gap-5 ">
            <div
              className="h-80 w-80
             flex-1"
            >
              <Carousel slide={false} className="pb-3">
                {productDetailData.images.length > 0 ? (
                  productDetailData.images.map((item, _) => (
                    <img src={item} key={_} />
                  ))
                ) : (
                  <img src={productDetailData.images[0]} alt="Product image" />
                )}
              </Carousel>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Name:</h1>
                <span className="text-2xl">{productData?.name}</span>
              </div>

              <div className="flex items-center gap-4 text-xl ">
                <span className="text-gray-400">Colors:</span>
                <div className="ml-5 flex gap-2">
                  {productDetailData.colors.length > 0 ? (
                    productDetailData.colors.map((color, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: color }}
                        className="rounded-lg px-4"
                      >
                        {color}
                      </div>
                    ))
                  ) : (
                    <span>No colors available</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Price:</h1>
                <span>$ {productData.price}</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Quantitiy:</h1>
                <span>{productDetailData.quantity}</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Discount:</h1>
                <span>{productDetailData.discount}%</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Description:</h1>
                <span className="text-[16px]">
                  {productDetailData.description}
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end gap-3 mt-16">
            <button>{editIcon2}</button>
            {/* <UpdateProductDetailModal/> */}
            <DeleteProductDetailModal id={product_id} />
          </div>
        </div>
      ) : (
        <CreateProductDetailModal product_id={product_id} />
      )}
    </div>
  );
};

export default SingleProduct;
