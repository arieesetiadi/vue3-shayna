<template>
    <section class="hero-section">
        <carousel :items-to-show="1" :transition="2000" :autoplay="5000" :wrapAround="true" class="hero-items">
            <slide class="hero-item" style="background-image: url('img/hero-1.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </slide>
            <slide class="hero-item" style="background-image: url('img/hero-2.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
    name: "HeroSection",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
};
</script>

<style scoped>
.hero-item {
    height: 65vh;
}
</style>
