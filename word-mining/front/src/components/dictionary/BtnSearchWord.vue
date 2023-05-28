<template>
    <BtnQuad @event="sendToStore" icon='mdi-magnify' />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// store
import useTranslateStore from '@/store/translate'
import usePronounceStore from '@/store/pronouncing'
// components
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'BtnSearchWordComp',
    components: { BtnQuad },
    data() {
        const translateStore = useTranslateStore()
        const pronounceStore = usePronounceStore()
        return { translateStore, pronounceStore }
    },
    methods: {
        sendToStore() {
            this.translateStore.updateTranslateObject("sourceText", this.translateStore.textInput)
            this.translateStore.translate()
            this.pronounceStore.updatePronounceData("text", this.translateStore.textInput)
        }
    }
})
</script>

