<template>
    <div class="fixed bottom-0 right-0 w-full h-full max-w-2xl bg-white z-20 shadow-lg">

        <article class="overflow-auto h-full">

            <TransitionGroup name="fadeGroup" tag="ul"
                class="bg-gray-200 overflow-hidden w-full aspect-square p-3 px-5 h-[50vh] relative">

                <div class="aspect-square transition-all duration-700 delay-0 w-[160px] h-[160px]" v-for="item, x in getVariants()" :key="item"
                    :class="{ 'w-[350px] h-[350px]': selected === item, 'absolute right-[50px] opacity-[0.75]': selected !== item }"
                    v-bind:style="{ top: (x - 1 <= 0 ? 25 : (25 + 175) * (x - 1)) + 'px' }">

                    <img :src="item.node.image.url" alt="" class="w-full h-full object-contain object-center">

                </div>

            </TransitionGroup>

            <section class="p-4 text-gray-600">
                <div class="flex pb-3">
                    <button
                        class="rounded-0 border-[1px] border-blue-500 text-gray-800 py-2 px-3 me-2 hover:text-white hover:bg-blue-200 text-[small]"
                        v-for="variant in product.variants.edges" v-html="variant.node.title" @click="selected = variant"
                        :class="{ 'bg-blue-500 text-white hover:bg-blue-500': selected === variant, 'bg-white': selected !== variant }"></button>
                </div>
                <div class="relative">
                    <h3 class="text-2xl font-bold" v-html="product.title"></h3>
                    <span class="absolute top-0 right-0 font-bold" v-html="getPrice()"></span>
                </div>

                <p class="py-4" v-html="product.description"></p>


                <div class="text-center py-4">
                    <div class="text-left">
                        <h4 class="font-bold text-lg mb-2">Quantity</h4>
                        <div class="flex flex-wrap sm:flex-nowrap">

                            <div
                                class="flex w-full sm:w-1/2 md:w-[300px] sm:inline-flex border-[1px] rounded-0 overflow-hidden mb-3">
                                <button class="bg-red-50 text-red-400 hover:bg-red-400 hover:text-white aspect-square px-4"
                                    @click="subQty">
                                    <font-awesome-icon icon="minus" />
                                </button>
                                <input
                                    class="w-full text-center px-5 border-0 active:outline-none focus-visible:outline-none focus-visible:border-blue-400 rounded-0"
                                    v-mpdel="number" placeholder="Quantity" min="1" max="10" :value="qty" disabled>
                                <button
                                    class="bg-blue-50 text-blue-400 hover:bg-blue-400 hover:text-white aspect-square px-4"
                                    @click="addQty">
                                    <font-awesome-icon icon="plus" />
                                </button>
                            </div>


                            <div class="p-2 w-full sm:w-1/2 md:w-100 text-left sm:text-center">
                                <span class="text-gray-600 font-bold text-lg">Subtotal</span>
                                <span class="ms-3">
                                    <span class="text-gray-600 font-bold text-lg" v-html="subTotal"></span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <button class="my-4 bg-blue-600 text-blue-100 py-2 px-4 rounded-md w-full md:w-1/2 hover:scale-105">Add
                        to Cart</button>
                </div>

            </section>
            <button
                class="absolute top-0 right-0 opacity-40 hover:opacity-100 px-3 py-2 mr-5 mt-5 rounded-md shadow-md bg-red-200 text-red-600"
                @click="close">Close</button>
        </article>
    </div>
</template>


<script>

import { defineComponent } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faMinus, faPlus);

export default defineComponent({

    props: {
        product: Object
    },

    data() {
        return {
            selected: this.product.variants.edges[0],
            qty: 1,
            subTotal: 0,
        }
    },

    methods: {
        addQty() {
            if(this.qty < 10) {
                this.qty++;
            }
            this.subTotal = this.qty * this.selected.node.price.amount;
        },
        subQty() {

            if(this.qty > 1) {
                this.qty--;
            }
            this.subTotal = this.qty * this.selected.node.price.amount;
        },
        close() {
            this.selected = {}
            this.$emit('close')
        },
        featuredImage() {
            if (this.selected.node) {
                return this.selected.node.image.url;
            }
            return this.product.featuredImage.url
        }
        ,
        getPrice() {
            if (this.selected.node) {
                return this.selected.node.price.currencyCode + " $" + this.selected.node.price.amount
            }
            return this.product.variants.edges[0].node.price.currencyCode + " $" + this.product.variants.edges[0].node.price.amount
        },
        getVariants() {
            let variants = [];
            let except = 0;
            if (this.selected.node) {
                except = this.product.variants.edges.findIndex(
                    (variant) => variant.node.title === this.selected.node.title
                );
            }

            for (let i = 0; i < this.product.variants.edges.length; i++) {
                if (i === except) continue;
                variants.push(this.product.variants.edges[i])
            }

            variants.unshift(this.selected);
            return variants.slice(0, 3);

        },
    },

    watch: {
        product: {
            immediate: true, // Trigger the watcher immediately when the component is created
            handler(newProduct, oldProduct) {
                // Reset the selected data property when the product prop changes
                this.selected = this.product.variants.edges[0];
                this.subTotal = this.qty * this.selected.node.price.amount;
                this.qty = 1;
            },
        }
    }
})
</script>