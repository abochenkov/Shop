<template>
    <MyHeader />
    <div class="container">
        <template v-if="totalQuantityCart">
            
            <div class="row row-cols-auto">
                <div class="col"> <p class="fs-4">Cart</p> </div>
                <div class="col"> <p class="fs-4">Quantity: {{ totalQuantityCart }}</p> </div>
                <div class="col"> <p class="fs-4">Total price: {{ totalSumCart }}</p> </div>
            </div>

                <template v-for="product in cart" :key="product.id">
                    <div class="row">
                        <div class="col-3 gy-3" >
                            <div class="card" >
                                <img v-bind:src="product.img" class="card-img-top" alt="..."  style="height: 18rem">
                                <div class="card-body">
                                    <h5 class="card-title">{{ product.title }}</h5>
                                    <p class="card-text">Price {{ product.price }}$</p>
                                    <div class="row text-center">
                                        <div class="col"><button class="btn btn-primary" @click="removeProduct(product)">Remove</button> </div>
                                        <div class="col"><p class="card-text">{{ product.quantity }}</p> </div>
                                        <div class="col"><button class="btn btn-primary" @click="addProduct(product)">Add</button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

        </template>
        <template v-else>
            <h4>Cart empty</h4>
        </template>
    </div>
</template>

<script setup>
import MyHeader from './MyHeader.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const cart = computed( ()=> store.getters['cart/cart']);
const totalQuantityCart = computed( ()=> store.getters['cart/quantity']);
const totalSumCart = computed( ()=> store.getters['cart/totalSum']);

const addProduct = (product)=> store.dispatch('cart/addProductToCart', product);
const removeProduct = (product)=> store.dispatch('cart/removeProductFromCart', product);

</script>