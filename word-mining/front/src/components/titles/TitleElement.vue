<template>
    <v-btn
        variant="text" 
        class="text-overline pl-3"
        @click="$emit('event')"
        >{{ text }}</v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { string } from 'vue-types';

export default defineComponent({
    name: 'TitleElement',
    props: {
        text: string().def("").isRequired,
    },
    emits:['event']
})
</script>

