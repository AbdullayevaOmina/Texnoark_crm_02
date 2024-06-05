import React from "react";

const PreviewDrawer: React.FC = () => {
  const toggleDrawer = () => {
    const drawer = document.getElementById("drawer-read-product-advanced");
    if (drawer) {
      drawer.classList.toggle("-translate-x-full");
    }
  };

  return (
    <div>
      <div
        id="drawer-read-product-advanced"
        className="overflow-y-auto fixed top-0 left-0 z-40 p-4 pt-8 w-full max-w-lg h-screen bg-white transition-transform -translate-x-full dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-label"
        aria-hidden="true"
      >
        <div>
          <h4
            id="read-drawer-label"
            className="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white"
          >
            Apple iMac 25"
          </h4>
          <h5 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            $2999
          </h5>
        </div>
        <button
          type="button"
          data-drawer-dismiss="drawer-read-product-advanced"
          aria-controls="drawer-read-product-advanced"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={toggleDrawer}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="grid grid-cols-3 gap-4 mb-4 sm:mb-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700"
            >
              <img
                src={`https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-${
                  index % 3 === 0 ? "side" : index % 3 === 1 ? "front" : "back"
                }-image.png`}
                alt={`iMac ${
                  index % 3 === 0 ? "Side" : index % 3 === 1 ? "Front" : "Back"
                } Image`}
              />
            </div>
          ))}
        </div>
        <dl className="sm:mb-5">
          <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Details
          </dt>
          <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
            Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
        </dl>
        <dl className="grid grid-cols-2 gap-4 mb-4">
          {[
            { title: "Shipping", content: "United States, Europe" },
            {
              title: "Colors",
              content: [
                "purple-600",
                "indigo-400",
                "primary-600",
                "pink-400",
                "teal-300",
                "green-300",
              ],
            },
            { title: "Product State", content: "New" },
            { title: "Sold by", content: "Flowbite" },
            { title: "Ships from", content: "Flowbite" },
            { title: "Brand", content: "Apple" },
            { title: "Dimensions (cm)", content: "105 x 15 x 23" },
            { title: "Item weight", content: "12kg" },
          ].map((item, index) => (
            <div
              key={index}
              className={`col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600`}
            >
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                {item.title}
              </dt>
              <dd
                className={`text-gray-500 dark:text-gray-400 ${
                  Array.isArray(item.content)
                    ? "flex items-center space-x-2"
                    : ""
                }`}
              >
                {Array.isArray(item.content) ? (
                  item.content.map((color, i) => (
                    <div
                      key={i}
                      className={`flex-shrink-0 w-6 h-6 bg-${color} rounded-full`}
                    ></div>
                  ))
                ) : (
                  <>
                    {item.title === "Product State" ? (
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg
                          aria-hidden="true"
                          className="mr-1 w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        New
                      </span>
                    ) : (
                      item.content
                    )}
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex bottom-0 left-0 justify-center pb-4 space-x-4 w-full">
          <button
            type="button"
            className="text-white w-full inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              aria-hidden="true"
              className="mr-1 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            Edit
          </button>
          <button
            type="button"
            className="text-gray-900 w-full inline-flex items-center justify-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 hover:text-primary-700 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg
              aria-hidden="true"
              className="mr-1 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.707a1 1 0 00-1.414-1.414L10 7.586 7.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 12.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
      <button
        className="fixed right-0 bottom-0 mb-4 mr-4 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 focus:bg-primary-700"
        onClick={toggleDrawer}
      >
        Preview Product
      </button>
    </div>
  );
};

export default PreviewDrawer;
