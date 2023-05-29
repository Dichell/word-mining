<template>
    <v-sheet class="text-overline pl-3">{{ text }}</v-sheet> 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { string } from 'vue-types';

export default defineComponent({
    name: 'TitleElement',
    props: {
        text: string().def("").isRequired,
    }
})
</script>

