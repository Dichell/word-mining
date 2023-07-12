<template>
  <List />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import List from '@/components/translateHistory/List.vue'

export default defineComponent({
    name: 'TranslateHistory',
    components: { List }
})
</script>
