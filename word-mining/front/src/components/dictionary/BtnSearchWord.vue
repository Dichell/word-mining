<template>
    <BtnQuad @event="sendToStore" icon='mdi-magnify' />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'
import useYouglishlStore from '@/store/youglish'
import useTranslateStore from '@/store/translate'
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'BtnSearchWord',
    components: { BtnQuad },
    data() {
        const generalStore = useGeneralStore()
        const youglishlStore = useYouglishlStore()
        const translateStore = useTranslateStore()
        let textInput = ""
        return { generalStore, youglishlStore, translateStore, textInput }
    },
    methods: {
        sendToStore(): void {
            this.generalStore.setSourceText()
            this.translateStore.translate()
        }
    }
})
</script>

