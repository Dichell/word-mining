<template>
    <v-btn 
        :height=height
        variant="flat"
        color="primary"
        :rounded=rounded
        @click="$emit('event')"
        v-on:keypress.ctrl.10.13.native="$emit('event')"
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
import { string, number, oneOf } from 'vue-types'

export default defineComponent({
    name: 'BtnQuad',
    props: {
        icon: string().isRequired,
        tooltip: string(),
        height: number().def(50),
        rounded: oneOf([0, 'sm', 'lg', 'xl', 'pill', 'circle', 'shaped']).def('pill')
    },
    emits: ["event"]
})
</script>

