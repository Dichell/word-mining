<template>
    <YouGlish />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YouGlish from '@/components/YouGlish.vue'

export default defineComponent({
    name: 'Dictionary',
    components: { YouGlish }
})
</script>
