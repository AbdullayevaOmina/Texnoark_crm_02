import { CloseIcon, MenuIcon, SearchIcon2 } from "@drawer-icons";
import avatar from "../../assets/avatar.png";
import { getDataFromCookie, removeDataFromCookie } from "@cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo3.png";

import { GlobalSearch } from "@ui";
const index = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const keysToRemove: string[] = [
      "access_token",
      "refresh_token",
      "first_name",
      "last_name",
      "admin_email",
      "admin_id",
      "admin_phone_number",
    ];

    keysToRemove.forEach((key) => {
      removeDataFromCookie(key);
    });
    navigate("/");
    // }
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-40">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {MenuIcon}
              {CloseIcon}
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a
              href="/"
              className="hidden md:flex items-center justify-between mr-4"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <img
                  src={Logo}
                  className="mr-3 h-7 w-auto"
                  alt="E-Ashyo shop"
                />
              </span>
            </a>
            <GlobalSearch />
          </div>

          <div className="flex items-center lg:order-2">
            <button
              type="button"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Toggle search</span>
              {SearchIcon2}
            </button>

            {/* Menu */}
            <button
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={avatar}
                alt="user photo"
              />
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
              id="dropdown"
            >
              <div className="py-3 px-4 grid gap-1">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  {getDataFromCookie("first_name")}{" "}
                  {getDataFromCookie("last_name")}
                </span>
                <span className="block text-sm text-sky-900 truncate dark:text-sky-600">
                  {getDataFromCookie("admin_email")}
                </span>
                <span className="block text-sm text-gray-900 truncate dark:text-white">
                  {getDataFromCookie("admin_phone_number")}
                </span>
              </div>
              <ul
                className="py-1 text-gray-700 dark:text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    My profile
                  </a>
                </li>
                <li>
                  <Link
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    to={"settings"}
                  >
                    Account settings
                  </Link>
                </li>
              </ul>
              <ul
                className="py-1 text-gray-700 dark:text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <span
                    onClick={handleLogout}
                    className="flex gap-2 items-center py-2 px-4 text-sm rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-[19px] h-[19px] text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                        d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                      />
                    </svg>{" "}
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default index;
