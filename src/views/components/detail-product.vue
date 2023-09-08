<template>
    <div class="fixed bottom-0 right-0 w-full h-full max-w-2xl bg-white z-20">
        <article>
            <header class="bg-gray-200 w-full aspect-[12/7] p-3 flex justify-center gap-4">
                <img class="aspect-square object-cover object-center rounded-lg overflow-hidden hover:scale-105" alt="img"
                    :src="featuredImage()">
                <div class="flex flex-wrap gap-3 max-w-[25%]">
                    <img class="aspect-square object-cover object-center rounded-lg overflow-hidden hover:scale-105"
                        alt="img" v-for="url in getVariantsImage()" :src="url">
                </div>
            </header>
            <section class="p-4">
                <div class="relative">
                    <h3 class="text-2xl font-bold text-gray-800" v-html="product.title"></h3>
                    <span class="absolute top-0 right-0 font-bold" v-html="getPrice()"></span>
                </div>
                <div>
                    <div class="my-4">
                        <h4>variants</h4>
                        <div class="flex mx-3">
                            <button class="rounded-0 border text-gray-800 px-2 me-2"
                                v-for="variant in product.variants.edges" v-html="variant.node.title"
                                @click="selected = variant" :class="{ 'bg-blue-400 text-white': selected === variant }"></button>
                        </div>
                    </div>

                    <div>
                        <h4>description</h4>
                        <p class="text-gray-600 mx-3" v-html="product.description"></p>
                    </div>
                </div>
            </section>
            <button class="absolute top-0 right-0 text-gray-800 opacity-50 hover:opacity-100 p-4 mr-5 mt-5"
                @click="close">Close</button>
        </article>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({

    props: {
        product: Object
    },

    data() {
        return {
            selected: this.product.variants.edges[0]
        }
    },

    created() {
        this.selected = {};
    },

    methods: {
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
        getVariantsImage() {
            let images = [];
            let except = 0;
            if (this.selected.node) {
                except = this.product.variants.edges.findIndex(
                    (variant) => variant.node.title === this.selected.node.title
                );
            }

            for (let i = 0; i < this.product.variants.edges.length; i++) {
                if (i === except) continue;
                images.push(this.product.variants.edges[i].node.image.url)
            }
            return images;

        },
    },

    watch: {
        product: {
            immediate: true, // Trigger the watcher immediately when the component is created
            handler(newProduct, oldProduct) {
                // Reset the selected data property when the product prop changes
                this.selected = newProduct.variants.edges[0];
            },
        }
    }
})
</script>