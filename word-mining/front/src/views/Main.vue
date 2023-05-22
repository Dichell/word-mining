<template>
    <Appbar />
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appbar from '@/components/Appbar.vue'

export default defineComponent({
    name: "MainView",
    components: { Appbar }
})
</script>
