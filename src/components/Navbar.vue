<template>
  <div class="vp-raw">
    <nav
      class="border-gray-200 p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a class="flex items-center" href="https://www.google.com/"
          ><img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite logo"
            class="mr-3 h-6 sm:h-10"
          /><span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            Home
          </span></a
        ><button
          aria-controls="navbar-default"
          aria-expanded="false"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <span class="sr-only">Open main menu</span
          ><svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="w-full md:block md:w-auto hidden">
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-gray-50"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded md:p-0 bg-blue-700 md:bg-transparent text-white md:text-blue-700 dark:text-white"
              >
                Wish-List
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                cart
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                login
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <!---->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
