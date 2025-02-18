<template>
  <div class="recommendation-container">
    <h2>推荐列表</h2>
    <el-card v-for="food in foodList" :key="food.name" class="food-card">
      <div class="food-info">
        <span class="food-name">{{ food.name }}</span>
        <el-rate v-model="food.rating" :disabled="true" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const foodList = ref([
  { name: "美食1", rating: 4.5 },
  { name: "美食2", rating: 4.8 },
  { name: "美食3", rating: 4.6 },
]);
</script>

<style scoped>
.recommendation-container {
  text-align: center;
  margin-top: 20px;
}
.food-card {
  width: 300px;
  margin: 10px auto;
}
.food-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.food-name {
  font-size: 16px;
  font-weight: bold;
}
</style>
