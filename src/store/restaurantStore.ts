import { defineStore } from "pinia";

export const useRestaurantStore = defineStore("restaurant", {
  state: () => ({
    restaurants: [
      {
        id: 1,
        name: "川味居",
        rating: 4.5,
        image: "/assets/images/restaurant1.jpg",
      },
      {
        id: 2,
        name: "湘菜馆",
        rating: 4.2,
        image: "/assets/images/restaurant2.jpg",
      },
      {
        id: 3,
        name: "粤式茶餐厅",
        rating: 4.8,
        image: "/assets/images/restaurant3.jpg",
      },
    ],
  }),
  getters: {
    topRestaurants: (state) => state.restaurants.filter((r) => r.rating > 4.2),
  },
});
