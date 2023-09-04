<template>
    <ul class="nav justify-content-end">
        <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</router-link>        
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'cart' }">
                {{ totalQuantityCart }}
                <img src="../assets/icons/bag.svg" style="padding-bottom: 2px;">
                Cart
                </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
        </li>
    </ul>
    
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const totalQuantityCart = computed( ()=> store.getters['cart/quantity']);
</script>