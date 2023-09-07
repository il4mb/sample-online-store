<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.featuredImage.url" :alt="product.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0" v-html="product.variants.edges.length + ' Variants'"></span>
                  {{ product.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

const link = 'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}';
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
    data() {
        return {
            products: Array<Product>()
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
    }
})
</script>