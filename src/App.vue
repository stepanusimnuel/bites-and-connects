<template>
  <navbar></navbar>

  <router-view></router-view>

  <copyright></copyright>
</template>

<script>
import Navbar from "./pages/Navbar.vue";
import Copyright from "./Copyright.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Copyright,
  },
};
</script>

<style>
#app {
  margin-top: 120px;
}
</style>
