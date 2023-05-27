<template>
    <ControlPanelComp />
    <v-container class="d-flex flex-column justify-center">
        <TranslateComp />
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
import PronouncingComp from '@/components/dictionary/Pronouncing.vue'
import TranslateComp from '@/components/dictionary/Translate.vue'
// store
import usePronounceStore from "@/store/pronouncing";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlPanelComp, TranslateComp, PronouncingComp },
    data() {
        const pronounceStore = usePronounceStore() 
        return { pronounceStore }
    }
})
</script>
