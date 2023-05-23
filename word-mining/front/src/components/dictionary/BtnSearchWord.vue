<template>
    <BtnQuad @event="sendToStore" icon='mdi-magnify' />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'BtnSearchWord',
    components: { BtnQuad },
    data() {
        const generalStore = useGeneralStore()
        let textInput = ""
        return { generalStore, textInput }
    },
    methods: {
        sendToStore(): void {
            this.generalStore.setSourceText()
        }
    }
})
</script>

