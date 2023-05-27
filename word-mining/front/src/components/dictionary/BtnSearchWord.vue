<template>
    <BtnQuad @event="sendToStore" icon='mdi-magnify' />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'
import useYouglishStore from '@/store/youglish'
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'BtnSearchWord',
    components: { BtnQuad },
    data() {
        const translateStore = useTranslateStore()
        const youglishStore = useYouglishStore()
        return { translateStore, youglishStore }
    },
    methods: {
        sendToStore() {
            this.translateStore.updateTranslateObject("sourceText", this.translateStore.textInput)
            this.translateStore.translate()
            setTimeout(()=>{
                this.youglishStore.newTranslationTrigger++
            }, 2000)
        }
    }
})
</script>

