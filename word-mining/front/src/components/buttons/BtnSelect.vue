<template>
    <v-select
        v-model=sourceLanguage
        :items=sourceLanguages
        :item-title=itemTitle
        :label=label
        return-object
        @update:model-value="$emit('event')"
    ></v-select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BtnSelect',
    props: ["sourceLanguage", "sourceLanguages", "itemTitle", "label"],
    emits: ["event"]
})
</script>

