<template >
  <div>
    <h1 class="text-2xl pt-10 text-white text-center">MN Todo List</h1>
    <MNtodo />
  </div>
</template>

<script setup>
import MNtodo from './component/MNtodo.vue';
</script>

<style>
body {
  background-color: #0F2027;
  scroll-behavior: smooth;
}
</style>