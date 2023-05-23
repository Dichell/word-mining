<template>
    <v-btn 
        height="50"
        variant="flat"
        color="primary"
        @click="$emit('event')"
        >
        <v-icon color="white" :icon="icon"></v-icon>

        <v-tooltip
            v-if="tooltip"
            activator="parent"
            open-delay="500"
            >{{ tooltip }}</v-tooltip>
    </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BtnQuad',
    props: ["icon", "tooltip"],
    emits: ["event"]
})
</script>

