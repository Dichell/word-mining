<template>
    <Appbar />
    <router-view />
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appbar from '@/components/Appbar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
    name: "MainView",
    components: { Appbar, Footer }
})
</script>
