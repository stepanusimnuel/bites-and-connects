<template>
  <header class="w-full flex items-center bg-gray-800 absolute top-0 left-0">
    <div class="container mx-auto">
      <div class="flex justify-between items-center p-4 relative">
        <div>
          <router-link to="/home" class="inline-block text-2xl font-extrabold lg:text-3xl px-8">BNCC</router-link>
        </div>
        <div class="flex items-center">
          <button class="block absolute right-4 md:hidden" id="hamburger" @click.prevent="toggleNav">
            <span class="w-[20px] h-[2px] bg-primary block my-1"></span>
            <span class="w-[20px] h-[2px] bg-primary block my-1"></span>
            <span class="w-[20px] h-[2px] bg-primary block my-1"></span>
          </button>

          <div class="w-[200px] bg-gray-700 rounded-lg absolute right-6 top-12" :class="isNavOpen ? '' : 'hidden'">
            <router-link to="/home" class="mx-2 p-3 rounded-xl flex items-center text-sm font-semibold"> Home </router-link>
            <router-link to="/order" class="mx-2 p-3 rounded-xl flex items-center text-sm font-semibold"> Order </router-link>
            <router-link to="/gallery" class="mx-2 p-3 rounded-xl flex items-center text-sm font-semibold"> Gallery </router-link>
          </div>

          <nav class="hidden absolute bg-sky-100 shadow-lg rounded-md max-w-[200px] w-full right-4 top-full md:block md:static md:rounded-none md:shadow-none md:bg-transparent md:max-w-full" id="nav-menu">
            <ul class="block md:flex">
              <router-link to="/home" class="mx-2 p-3 rounded-xl flex items-center text-sm font-semibold hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </router-link>
              <router-link to="/order" class="mx-2 p-3 rounded-xl flex items-center text-sm font-semibold hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                Order
              </router-link>
              <router-link to="/gallery" class="mx-2 p-3 rounded-xl flex items-center text-sm font-semibold hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                Gallery
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>
