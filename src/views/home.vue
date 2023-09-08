<template>
    <div class="bg-white" :class="{ 'blur-sm': selected, 'max-h-screen': selected, 'overflow-hidden': selected }">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product.id" class="group relative" @click="showDetail(product)">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="product.featuredImage.url" :alt="product.title"
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-md text-gray-700">{{ product.title }}</h3>

                            <span class="text-sm text-gray-500">
                                <span v-html="product.variants.edges[0].node.price.currencyCode"></span>
                                <span class="px-2" v-html="'$' + product.variants.edges[0].node.price.amount"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <detail-product v-if="selected" :product="selected_product" @close="hideDetail">
        
    </detail-product>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Detail from './components/detail-product.vue';


const link = 'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}}}';
type Product = {
    id: string;
    title: string;
    description: string;
    featuredImage: {
        id: string;
        url: string;
    },
    variants: {
        edges: [
            {
                node: {
                    title: string;
                    image: {
                        url: string;
                    }
                    price: {
                        amount: number;
                        currencyCode: string;
                    }
                }
            }
        ]
    }
}

export default defineComponent({
    components: {
        "detail-product": Detail
    },
    data() {
        return {
            products: Array<Product>(),
            selected: false,
            selected_product: {} as Product,
        }
    },

    created() {
        fetch(link)
            .then(res => res.json())
            .then(source => {

                this.products = Array<Product>();

                for (let i = 0; i < source.data.products.edges.length; i++) {

                    let data = source.data.products.edges[i];

                    this.products.push({
                        id: data.node.id,
                        title: data.node.title,
                        description: data.node.description,
                        featuredImage: data.node.featuredImage,
                        variants: data.node.variants
                    });
                }
            })
    },

    methods: {

        showDetail: function (product: Product) {

            this.selected = true
            this.selected_product = product;

        },
        hideDetail: function () {
            this.selected = false
            this.selected_product = {} as Product
        }
    }

})
</script>