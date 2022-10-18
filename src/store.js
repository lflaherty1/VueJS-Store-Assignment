import Vue from "vue";
import Vuex from "vuex";

import BlackHoodie from "./assets/black-hoodie.jpeg";
import BlueJeans from "./assets/blue-jeans.jpeg";
import WhiteShirt from "./assets/white-shirt.jpeg";
import DressShoes from "./assets/dress-shoes.jpeg";
import LeatherJacket from "./assets/leather-jacket.jpeg";
import MensWallet from "./assets/mens-wallet.jpeg";

Vue.use(Vuex);

export default new Vuex.Store({
  // state is the same as what would typically go inside of the data object when using Vue without Vuex.
  state: {
    items: [
      {
        id: 1,
        name: "Dress Shoes",
        sizes: [3, 4, 5, 6, 7, 8],
        price: 45,
        image: DressShoes,
      },
      {
        id: 2,
        name: "Mens Wallet",
        sizes: [3, 4, 5, 6, 7, 8],
        price: 80,
        image: MensWallet,
      },
      {
        id: 3,
        name: "Blue Jeans",
        sizes: [4, 5, 7, 8],
        price: 40,
        image: BlueJeans,
      },
      {
        id: 4,
        name: "White T-Shirt",
        sizes: [3, 4, 5, 6, 7],
        price: 60,
        image: WhiteShirt,
      },
      {
        id: 5,
        name: "Leather Jacket",
        sizes: [3, 4, 5, 8],
        price: 70,
        image: LeatherJacket,
      },
      {
        id: 6,
        name: "Black Hoodie",
        sizes: [8],
        price: 100,
        image: BlackHoodie,
      },
    ],
    cart: [],
  },
  // getters are Vuex's equivalent to computed properties in Vue.
  // functions here will always contain state as a parameter
  getters: {
    total: (state) => {
      if (state.cart.length > 0) {
        return state.cart
          .map((item) => item.price)
          .reduce((total, amount) => total + amount);
      } else {
        return 0;
      }
    },
  },
  // mutations are essentially functions that update state in some way.
  // You can think of these as kind of being Vuex's equivalent to Vue's methods.
  mutations: {
    addToCart(state, payload) {
      console.log("Just Added:", payload);
      console.log("Total Cart:", state.cart);
      return state.cart.push(payload);
    },
  },
  // actions are effectively the functions that get called by your components in order to trigger a mutation.
  actions: {
    // add(context) {
    //     context.commit('add')
    // }
  },
});
