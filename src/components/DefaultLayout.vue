<template>
  <Header />
  <main class="bg-white dark:bg-gray-900">
    <router-view />
  </main>
  <Footer />
</template>
  
<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>