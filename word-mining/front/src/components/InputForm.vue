<template>
    <v-text-field
        type="text"
        v-model=textInput
        append-inner-icon="mdi-magnify"
        @click:append-inner="sendToStore"
        ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'

export default defineComponent({
    name: 'InputForm',
    data() {
        const generalStore = useGeneralStore()
        const textInput = "שלום"

        return { generalStore, textInput }
    },
    methods: {
        sendToStore(): void {
            this.generalStore.setSourceText(this.textInput)
        }
    }
})
</script>

