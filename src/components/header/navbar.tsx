import {
  BellIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
  SearchIcon2,
} from "@drawer-icons";
import avatar from "../../assets/avatar.png";
import { getDataFromCookie, removeDataFromCookie } from "@cookie";
import { useNavigate } from "react-router-dom";
import Logo2 from "../../assets/logo2.png";
import { eyeIcon } from "@global-icons";
// import { useRegisterStore } from "@store";

const index = () => {
  const navigate = useNavigate();
  // const { logout } = useRegisterStore();

  const handleLogout = async () => {
    // const resStatus = await logout();
    // if (resStatus === 204) {
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
                  src={Logo2}
                  className="mr-3 h-7 w-auto"
                  alt="E-Ashyo shop"
                />
              </span>
            </a>

            <form action="#" method="GET" className="hidden md:block md:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative md:ml-10 md:w-72 lg:w-[400px] xl:w-[500px]">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  {SearchIcon}
                </div>
                <input
                  name="search"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
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

            {/* <!-- Notifications --> */}
            <button
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              {BellIcon}
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
              id="notification-dropdown"
            >
              <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                Notifications
              </div>
              <div>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Jese leos
                      </span>
                      and
                      <span className="font-medium text-gray-900 dark:text-white">
                        5 others
                      </span>
                      started following you.
                    </div>
                    <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                      10 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                      alt="Joseph McFall avatar"
                    />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Joseph Mcfall
                      </span>
                      and
                      <span className="font-medium text-gray-900 dark:text-white">
                        141 others
                      </span>
                      love your story. See it and view more stories.
                    </div>
                    <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                      44 minutes ago
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                      alt="Roberta Casas image"
                    />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Leslie Livingston
                      </span>
                      mentioned you in a comment:
                      <span className="font-medium text-primary-600 dark:text-primary-500">
                        @bonnie.green
                      </span>
                      what do you say?
                    </div>
                    <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                      1 hour ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="#"
                className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
              >
                <div className="inline-flex items-center">
                  {eyeIcon}
                  View all
                </div>
              </a>
            </div>

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
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Account settings
                  </a>
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
