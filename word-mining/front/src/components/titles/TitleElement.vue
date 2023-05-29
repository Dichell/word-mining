<template>
    <v-sheet class="pa-1 bg-primary" ></v-sheet> 
    <v-sheet class="pa-2 bg-blue-lighten-5" >{{ text }}</v-sheet> 
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

