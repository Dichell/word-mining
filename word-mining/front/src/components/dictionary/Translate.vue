<template>
    <v-sheet>Translate</v-sheet> 
    <v-sheet><h3>{{ translateStore.translatedText }}</h3></v-sheet>
    <v-sheet>With context</v-sheet> 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'

export default defineComponent({
    name: 'Translate',

    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    },

    methods: {
    },

    computed: {

    },

    mounted() {
    }

})
</script>

