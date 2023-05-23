<template>
    <BtnQuad @event="sendToStore" icon='mdi-magnify' />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'
import useYouglishlStore from '@/store/youglish'
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'BtnSearchWord',
    components: { BtnQuad },
    data() {
        const generalStore = useGeneralStore()
        const youglishlStore = useYouglishlStore()
        let textInput = ""
        return { generalStore, youglishlStore, textInput }
    },
    methods: {
        sendToStore(): void {
            this.generalStore.setSourceText()
            this.youglishlStore.newTranslationTrigger++
        }
    }
})
</script>

