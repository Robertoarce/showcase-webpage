<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 z-50  gradient-border-b">
    <div class="max-w-screen-xl flex flex-wrap   justify-between mx-auto p-3">
      <a href="." class="flex items-center">
        <img src="./../assets/arce.png" class="h-12 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-thin  whitespace-nowrap dark:text-white"> Roberto
          Arce</span>
      </a>

      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>


      <div :class="{'hidden': !menuOpen, 'w-full': menuOpen}" class="md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col pt-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <!-- GitHub Link -->
      
          <li>
            <a href="https://github.com/Robertoarce?tab=repositories">
              <button type="button"
                class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd" />
                </svg>
                Github
              </button>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/robarce/?locale=en_US">
              <button type="button" href="https://github.com/Robertoarce?tab=repositories"
                class="text-white bg-[#2867B2] hover:bg-[#2867B2]/90 focus:ring-4 focus:outline-none focus:ring-[#2867B2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2867B2]/55 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M0 1.882C0 .846.83 0 1.878 0h20.244C23.17 0 24 .846 24 1.882v20.236C24 23.154 23.17 24 22.122 24H1.878C.83 24 0 23.154 0 22.118V1.882zM7.35 20.533H3.545v-11.8H7.35v11.8zM5.448 7.035c-1.2 0-2.17-.983-2.17-2.192 0-1.21.97-2.193 2.17-2.193 1.2 0 2.17.983 2.17 2.192 0 1.21-.97 2.193-2.17 2.193zm15.085 13.498h-3.81v-6.41c0-1.61-.578-2.706-2.02-2.706-1.103 0-1.756.746-2.045 1.463-.105.255-.13.612-.13.97v6.683h-3.81s.052-10.846 0-11.8h3.81v1.675c.504-.776 1.408-1.882 3.42-1.882 2.49 0 4.37 1.624 4.37 5.116v6.89z"
                    clip-rule="evenodd" />
                </svg>
                LinkedIn
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false, // Initial state of the menu
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Toggle the state
    },
  },
};
</script>

<style  >


.gradient-border-b {
  border-bottom: 4px solid; /* Adjust the pixel value as needed */
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, yellow, red); /* This creates a gradient from yellow to red */
}


</style>
