<template>
  <div>
    <h1>推荐列表</h1>
    <ul>
      <li v-for="(item, index) in recommendations" :key="index">
        {{ item.name }} - {{ item.rating }} ⭐
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const recommendations = ref([
  { name: "美食1", rating: 4.5 },
  { name: "美食2", rating: 4.8 },
  { name: "美食3", rating: 4.6 },
]);
</script>
