<template>
    <v-sheet>Translate</v-sheet> 
    <v-sheet><h3>{{ translateStore.translateObject.translatedText }}</h3></v-sheet>
    <v-sheet></v-sheet> 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'

export default defineComponent({
    name: 'Translate',
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    }
})
</script>

