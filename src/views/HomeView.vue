<template>
    <div>
        <TheHeader />
        <HeroSection />
        <ProductsSection />
        <InstagramsSection />
        <PartnersSection />
        <TheFooter />
    </div>
</template>

<script>
// Import Components
import TheHeader from "@/components/TheHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import InstagramsSection from "@/components/InstagramsSection.vue";
import PartnersSection from "@/components/PartnersSection.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
    name: "HomeView",
    components: {
        TheHeader,
        HeroSection,
        ProductsSection,
        InstagramsSection,
        PartnersSection,
        TheFooter,
    },
};
</script>
