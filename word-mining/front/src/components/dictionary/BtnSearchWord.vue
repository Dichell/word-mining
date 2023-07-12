<template>
    <BtnQuad 
        icon='mdi-magnify' 
        :height=56 
        rounded="lg"
        @click="$emit('click')" 
        />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// components
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'BtnSearchWordComp',
    components: { BtnQuad },
    emits: ['click']

})
</script>

