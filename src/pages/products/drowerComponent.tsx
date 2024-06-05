import React, { useState } from "react";

const DrawerComponent: React.FC = () => {
  const [productName, setProductName] = useState("Apple iMac 27”");
  const [description, setDescription] = useState(
    "Standard glass, 21.5-inch (diagonal) Retina 4K display with IPS technology; 4096‑by‑2304 resolution with support for one billion colors"
  );
  const [category, setCategory] = useState("");
  const [itemWeight, setItemWeight] = useState(2.25);
  const [itemPrice, setItemPrice] = useState(3999);
  const [itemQuantity, setItemQuantity] = useState(20);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({
      productName,
      description,
      category,
      itemWeight,
      itemPrice,
      itemQuantity,
      file,
    });
  };

  const toggleDrawer = () => {
    const drawer = document.getElementById("drawer-update-product");
    if (drawer) {
      drawer.classList.toggle("-translate-x-full");
    }
  };

  return (
    <div>
      <form
        id="drawer-update-product"
        className="fixed top-0 left-0 z-40 w-full h-screen max-w-3xl p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        aria-labelledby="drawer-update-product-label"
        aria-hidden="true"
        onSubmit={handleSubmit}
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          New Product
        </h5>
        <button
          type="button"
          aria-controls="drawer-update-product"
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
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          <div className="space-y-4 sm:col-span-2 sm:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={productName}
                placeholder="Type product name"
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                    {/* Icons can be implemented here if needed */}
                  </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                  <label htmlFor="editor" className="sr-only">
                    Publish post
                  </label>
                  <textarea
                    id="editor"
                    rows={8}
                    className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:col-span-1 sm:space-y-6">
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select category</option>
                <option>Electronics</option>
                <option>Laptops</option>
                <option>Phones</option>
                <option>TVs</option>
                <option>PCs</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Weight (kg)
              </label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={itemWeight}
                placeholder="12"
                onChange={(e) => setItemWeight(parseFloat(e.target.value))}
                required
              />
            </div>
            <div>
              <label
                htmlFor="item-price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Price ($)
              </label>
              <input
                type="number"
                name="item-price"
                id="item-price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={itemPrice}
                placeholder="$3999"
                onChange={(e) => setItemPrice(parseFloat(e.target.value))}
                required
              />
            </div>
            <div>
              <label
                htmlFor="item-quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                name="item-quantity"
                id="item-quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={itemQuantity}
                placeholder="12"
                onChange={(e) => setItemQuantity(parseInt(e.target.value))}
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="image"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="image"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add product
          </button>
          <button
            type="button"
            aria-controls="drawer-update-product"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:hover:text-white dark:focus:ring-gray-700"
            onClick={toggleDrawer}
          >
            Cancel
          </button>
        </div>
      </form>
      <button
        className="fixed right-0 bottom-0 mb-4 mr-4 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 focus:bg-primary-700"
        onClick={toggleDrawer}
      >
        Add Product
      </button>
    </div>
  );
};

export default DrawerComponent;
