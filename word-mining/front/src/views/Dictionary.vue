<template>
    <ControlPanelComp />
    <v-container class="d-flex flex-column justify-center">
        <TranslateComp />
        <TranslateLookupComp />
        <PronouncingComp 
            v-if="pronounceStore.isActive" 
            :key=pronounceStore.newTranslationTrigger /> 
        <!-- // key is a way to rerender comp if new word was pased -->
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// components
import ControlPanelComp from '@/components/dictionary/ControlPanel.vue'
import TranslateComp from '@/components/dictionary/Translate.vue'
import TranslateLookupComp from '@/components/dictionary/TranslateLookup.vue'
import PronouncingComp from '@/components/dictionary/Pronouncing.vue'
// store
import usePronounceStore from "@/store/pronouncing";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlPanelComp, TranslateComp, TranslateLookupComp, PronouncingComp },
    data() {
        const pronounceStore = usePronounceStore() 
        return { pronounceStore }
    }
})
</script>
