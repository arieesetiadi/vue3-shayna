<template>
    <div class="partner-logo">
        <div class="container">
            <carousel class="logo-carousel" :items-to-show="3" :transition="2000" :autoplay="2000" :wrapAround="true">
                <slide class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-1.png" alt="" />
                    </div>
                </slide>
                <slide class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-2.png" alt="" />
                    </div>
                </slide>
                <slide class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-3.png" alt="" />
                    </div>
                </slide>
                <slide class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-4.png" alt="" />
                    </div>
                </slide>
                <slide class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-5.png" alt="" />
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
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
