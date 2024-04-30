<template>
  <div class="border rounded p-4">
    <div class="w-full text-xl lg:text-3xl font-bold p-4">Gallery Page</div>
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4 md:w-1/2 md:px-8 lg:w-1/3" v-for="(e, index) in events" :key="index">
          <div class="font-medium text-sm bg-slate-200 rounded-md shadow overflow-hidden my-10">
            <img :src="e.gambar" class="w-full" />
            <h4 class="font-bold text-lg px-2 py-2 text-slate-600">{{ e.nama }}</h4>
            <p class="text-secondary px-2 pb-4">{{ e.deskripsi }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, computed, reactive } from "vue";
const $e = inject("$e");
const $bus = inject("$bus");

let events = $e.getAllEvents();
</script>
