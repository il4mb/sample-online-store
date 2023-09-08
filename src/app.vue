<template>
    <nav class="bg-gray-800 text-white fixed top-0 w-full z-10">
        <div class="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px]">
            <router-link to="/">
                <span class="text-2xl font-bold text-white">Online Store</span>
            </router-link>

            <button class="ms-auto text-lg opacity-80 md:hidden w-8 h-8 text-white rounded-sm" @click="triggerMenu">
                <font-awesome-icon icon="bars" />
            </button>

            <div class="navbar-menu p-0" :class="{ 'show': show }">
                <div class="flex justify-end">
                    <button class="text-xl opacity-80 md:hidden w-8 h-8 text-gray-800 rounded-sm" @click="triggerMenu">
                        <font-awesome-icon icon="times" />
                    </button>
                </div>
                <router-link to="/" class="mx-3">
                    <font-awesome-icon icon="store" /> Home
                </router-link>
                <router-link to="/cart" class="mx-3">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Cart
                </router-link>
                <router-link to="/about" class="mx-3">
                    <font-awesome-icon icon="info-circle" /> About
                </router-link>
            </div>
        </div>
    </nav>
    <main class="max-h-screen overflow-hidden">
        <router-view />
    </main>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStore, faCartShopping, faCircleInfo, faEllipsisVertical, faBars } from "@fortawesome/free-solid-svg-icons";
import { defineComponent } from "vue";

library.add(faStore, faCartShopping, faCircleInfo, faEllipsisVertical, faBars);

export default defineComponent({
    data() {
        return {
            show: false
        }
    },

    methods: {
        triggerMenu() {
            if (this.show) {
                this.show = false
            } else {
                this.show = true
            }
        }
    },

    watch: {
        $route(to, from) {
            this.show = false;
        }
    }
})
</script>
