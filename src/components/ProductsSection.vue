<template>
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <carousel class="product-slider">
                        <slide v-for="(product, i) in products" :key="i" :items-to-show="3" :transition="2000" :autoplay="2000" :wrapAround="true">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <img :src="product.galleries[0].photo" alt="Product Image" />
                                    <ul>
                                        <li class="w-icon active">
                                            <router-link to="/product"><i class="icon_bag_alt"></i></router-link>
                                        </li>
                                        <li class="quick-view"><router-link to="/product">+ Quick View</router-link></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">{{ product.type }}</div>
                                    <router-link to="/product">
                                        <h5>{{ product.name }}</h5>
                                    </router-link>
                                    <div class="product-price">{{ product.price }}</div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
    name: "ProductsSection",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            API_URL: "http://shayna-backend.belajarkoding.com/api",
            products: [],
        };
    },
    beforeMount() {
        axios
            .get(this.API_URL + "/products")
            .then((response) => {
                this.products = response.data.data.data;
            })
            .catch((error) => console.error(error));
    },
};
</script>
