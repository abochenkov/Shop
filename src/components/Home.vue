<template>
    <MyHeader />
    <div class="container text-center">
      <h4>Products</h4>
      
      <div class="row row-cols-4">
        <template v-for="product in products" :key="product.id">
          <div class="col">
            <div class="card" style="width: 18rem;">
              <img v-bind:src="product.img" class="card-img-top" alt="..."  style="height: 26rem">
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">Price {{ product.price }}$</p>
                <div class="row">
                  <div class="col"><button v-show="product.totalInventory !== product.inventory" class="btn btn-primary" @click="removeProduct(product)">Remove</button> </div>
                  <div class="col"><p class="card-text">Inventory {{ product.inventory }}</p> </div>
                  <div class="col"><button class="btn btn-primary" @click="addProduct(product)">Add</button> </div>
  
                </div>
              </div>
            </div>
          </div>
        </template> 
      </div>
    </div>
</template>


<script setup>
import MyHeader from './MyHeader.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const products = computed( ()=> store.getters['products/products']);

const addProduct = (product)=> store.dispatch('cart/addProductToCart', product);
const removeProduct = (product)=> store.dispatch('cart/removeProductFromCart', product);


</script>