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

  console.log(productData);
  console.log(productDetailData);

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

  return (
    <div className="p-4 md:pl-[275px] w-full min-h-[100vh] pt-20">
      {productDetailData && productDetailData.images ? (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slideInterval={3000} leftControl=" " rightControl=" ">
                {productDetailData.images.length > 0 ? (
                  productDetailData.images.map((item, index) => (
                    <img
                      src={item}
                      key={index}
                      className="h-[100%] object-cover rounded-lg "
                      alt={`Product image ${index + 1}`}
                    />
                  ))
                ) : (
                  <img
                    src={productDetailData.images[0]}
                    className="w-full h-full object-cover rounded-lg"
                    alt="Product image"
                  />
                )}
              </Carousel>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <b className="text-xl mb-6">{productData?.name}</b>

              <div className="flex gap-5 items-center">
                <h1 className="text-gray-400 text-xl">Colors:</h1>
                <div className="flex gap-2">
                  {productDetailData.colors.length > 0 ? (
                    productDetailData.colors.map((color, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: color }}
                        className="w-5 h-5 rounded-full border"
                      />
                    ))
                  ) : (
                    <span className="text-gray-500">No colors available</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Price:</h1>
                <span>$ {productData.price}</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Quantity:</h1>
                <span>{productDetailData.quantity}</span>
              </div>
              <div className="flex items-center gap-4 text-xl">
                <h1 className="text-gray-400">Discount:</h1>
                <span>{productDetailData.discount}%</span>
              </div>
            </div>
          </div>
          <div className="text-[16px] mt-10 p-4 ">
            {productDetailData.description}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa
            enim vitae accusamus eius aliquam iusto repudiandae! Exercitationem
            at natus, odit tempore quae error. Voluptatibus vel aspernatur
            consequuntur a molestiae quaerat provident corporis ipsam eveniet
            autem rem delectus, commodi quae, asperiores laboriosam vero minima
            doloremque aperiam qui omnis esse fugit. Officia, excepturi
            expedita. Blanditiis doloribus consequatur, cupiditate nemo
            voluptates earum mollitia, vero temporibus quaerat omnis quos?
            Mollitia animi id reiciendis.
          </div>

          <div className="flex w-full justify-end gap-3 mt-16">
            <UpdateProductDetailModal product_detail={productDetailData} />
            <DeleteProductDetailModal id={productDetailData.id} />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl">{productData.name}</h1>
            <CreateProductDetailModal product_id={product_id} />
          </div>
          <h3 className="text-gray-600 text-center text-xl mt-16">
            Not Product detail
          </h3>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
