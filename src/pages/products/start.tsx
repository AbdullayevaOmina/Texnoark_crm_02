// Start.tsx
import {
  cartIcon,
  deleteIcon,
  downIcon,
  down_upIcon,
  editIcon,
  eyeIcon,
  filterIcon,
  plusIcon,
  searchIconMD,
  searchIconSM,
  star1Icon,
  star2Icon,
  star3Icon,
  star4Icon,
  star5Icon,
  whiteStar2Icon,
  whiteStar3Icon,
  whiteStar4Icon,
  whiteStar5Icon,
} from "@global-icons";
import TableFooter from "./TableFooter";

export const Start = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-2xl">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {searchIconMD}
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    placeholder="Search htmlFor products"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                id="createProductButton"
                data-modal-toggle="createProductModal"
                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                {plusIcon}
                Add product
              </button>

              <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                {filterIcon}
                Filter options
                {downIcon}
              </button>

              <div
                id="filterDropdown"
                className="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700 right-0"
              >
                <div className="flex items-center justify-between pt-2">
                  <h6 className="text-sm font-medium text-black dark:text-white">
                    Filters
                  </h6>
                  <div className="flex items-center space-x-3">
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Save view
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Clear all
                    </a>
                  </div>
                </div>
                <div className="pt-3 pb-2">
                  <label htmlFor="input-group-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      {searchIconSM}
                    </div>
                    <input
                      type="text"
                      id="input-group-search"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search keywords..."
                    />
                  </div>
                </div>
                <div
                  id="accordion-flush"
                  data-accordion="collapse"
                  data-active-classes="text-black dark:text-white"
                  data-inactive-classes="text-gray-500 dark:text-gray-400"
                >
                  {/* <!-- Category --> */}
                  <h2 id="category-heading">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      data-accordion-target="#category-body"
                      aria-expanded="true"
                      aria-controls="category-body"
                    >
                      <span>Category</span>
                      {down_upIcon}
                    </button>
                  </h2>
                  <div
                    id="category-body"
                    className="hidden"
                    aria-labelledby="category-heading"
                  >
                    <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <input
                            id="apple"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="apple"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Apple (56)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="microsoft"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="microsoft"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Microsoft (45)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="logitech"
                            type="checkbox"
                            value=""
                            checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="logitech"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Logitech (97)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="sony"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="sony"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Sony (234)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="asus"
                            type="checkbox"
                            value=""
                            checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="asus"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Asus (97)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="dell"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="dell"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Dell (56)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="msi"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="msi"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            MSI (97)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="canon"
                            type="checkbox"
                            value=""
                            checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="canon"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Canon (49)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="benq"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="benq"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            BenQ (23)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="razor"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="razor"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Razor (49)
                          </label>
                        </li>
                        <a
                          href="#"
                          className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
                        >
                          View all
                        </a>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Price --> */}
                  <h2 id="price-heading">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      data-accordion-target="#price-body"
                      aria-expanded="true"
                      aria-controls="price-body"
                    >
                      <span>Price</span>
                      {down_upIcon}
                    </button>
                  </h2>
                  <div
                    id="price-body"
                    className="hidden"
                    aria-labelledby="price-heading"
                  >
                    <div className="flex items-center py-2 space-x-3 font-light border-b border-gray-200 dark:border-gray-600">
                      <select
                        id="price-from"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option disabled selected>
                          From
                        </option>
                        <option>$500</option>
                        <option>$2500</option>
                        <option>$5000</option>
                      </select>
                      <select
                        id="price-to"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option disabled selected>
                          To
                        </option>
                        <option>$500</option>
                        <option>$2500</option>
                        <option>$5000</option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- Worldwide Shipping --> */}
                  <h2 id="worldwide-shipping-heading">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      data-accordion-target="#worldwide-shipping-body"
                      aria-expanded="true"
                      aria-controls="worldwide-shipping-body"
                    >
                      <span>Worldwide Shipping</span>
                      {down_upIcon}
                    </button>
                  </h2>
                  <div
                    id="worldwide-shipping-body"
                    className="hidden"
                    aria-labelledby="worldwide-shipping-heading"
                  >
                    <div className="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          name="shipping"
                          checked
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          North America
                        </span>
                      </label>
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          name="shipping"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          South America
                        </span>
                      </label>
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          name="shipping"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Asia
                        </span>
                      </label>
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          name="shipping"
                          checked
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Australia
                        </span>
                      </label>
                      <label className="relative flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          name="shipping"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Europe
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* <!-- Rating --> */}
                  <h2 id="rating-heading">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                      data-accordion-target="#rating-body"
                      aria-expanded="true"
                      aria-controls="rating-body"
                    >
                      <span>Rating</span>
                      {down_upIcon}
                    </button>
                  </h2>
                  <div
                    id="rating-body"
                    className="hidden"
                    aria-labelledby="rating-heading"
                  >
                    <div className="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
                      <div className="flex items-center">
                        <input
                          id="five-stars"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="five-stars"
                          className="flex items-center ml-2"
                        >
                          {star1Icon}
                          {star2Icon}
                          {star3Icon}
                          {star4Icon}
                          {star5Icon}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="four-stars"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="four-stars"
                          className="flex items-center ml-2"
                        >
                          {star1Icon}
                          {star2Icon}
                          {star3Icon}
                          {star4Icon}
                          {whiteStar5Icon}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="three-stars"
                          type="radio"
                          value=""
                          name="rating"
                          checked
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="three-stars"
                          className="flex items-center ml-2"
                        >
                          {star1Icon}
                          {star2Icon}
                          {star3Icon}
                          {whiteStar4Icon}
                          {whiteStar5Icon}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="two-stars"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="two-stars"
                          className="flex items-center ml-2"
                        >
                          {star1Icon}
                          {star2Icon}
                          {whiteStar3Icon}
                          {whiteStar4Icon}
                          {whiteStar5Icon}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="one-star"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="one-star"
                          className="flex items-center ml-2"
                        >
                          {star1Icon}
                          {whiteStar2Icon}
                          {whiteStar3Icon}
                          {whiteStar4Icon}
                          {whiteStar5Icon}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  type="button"
                >
                  Actions
                  {downIcon}
                </button>
                <div
                  id="actionsDropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="actionsDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mass Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="p-4">
                    Product
                  </th>
                  <th scope="col" className="p-4">
                    Category
                  </th>
                  <th scope="col" className="p-4">
                    Stock
                  </th>
                  <th scope="col" className="p-4">
                    Sales/Day
                  </th>
                  <th scope="col" className="p-4">
                    Sales/Month
                  </th>
                  <th scope="col" className="p-4">
                    Rating
                  </th>
                  <th scope="col" className="p-4">
                    Sales
                  </th>
                  <th scope="col" className="p-4">
                    Revenue
                  </th>
                  <th scope="col" className="p-4">
                    Last Update
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        onclick="event.stopPropagation()"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center mr-3">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                        alt="iMac Front Image"
                        className="h-8 w-auto mr-3"
                      />
                      Apple iMac 27&#34;
                    </div>
                  </th>
                  <td className="px-4 py-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      Desktop PC
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-700"></div>
                      95
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1.47
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    0.47
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      {star1Icon}
                      {star2Icon}
                      {star3Icon}
                      {star4Icon}
                      {star5Icon}
                      <span className="text-gray-500 dark:text-gray-400 ml-1">
                        5.0
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      {cartIcon}
                      1.6M
                    </div>
                  </td>
                  <td className="px-4 py-3">$3.2M</td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        data-drawer-target="drawer-update-product"
                        data-drawer-show="drawer-update-product"
                        aria-controls="drawer-update-product"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        {editIcon}
                        Edit
                      </button>
                      <button
                        type="button"
                        data-drawer-target="drawer-read-product-advanced"
                        data-drawer-show="drawer-read-product-advanced"
                        aria-controls="drawer-read-product-advanced"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        {eyeIcon}
                        Preview
                      </button>
                      <button
                        type="button"
                        data-modal-target="delete-modal"
                        data-modal-toggle="delete-modal"
                        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        {deleteIcon}
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <TableFooter />
        </div>
      </div>
    </section>
  );
};
