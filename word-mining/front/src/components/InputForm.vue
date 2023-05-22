<template>
      <v-responsive>
            <v-text-field
                class="mx-4 pa-2"
                type="text"
                v-model=textInput
                append-inner-icon="mdi-magnify"
                @click:append-inner="sendToStore"
            ></v-text-field>
            <v-select
                v-model=language
                :items=languages
                label="Source language"
                @update:model-value="setSourceLang"
            ></v-select>
    </v-responsive>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'
import { languages } from "@/types";

export default defineComponent({
    name: 'InputForm',
    data() {
        const generalStore = useGeneralStore()
        const textInput = "שלום"

        let language: string = ""

        return { generalStore, textInput, language }
    },
    methods: {
        sendToStore(){
            this.generalStore.setSourceText(this.textInput)
        },
        setSourceLang(){
            this.generalStore.setSourceLang(this.language)
        }
    },
    created() {
        this.language = this.generalStore.sourceLang
    },
    computed: {
        languages() {
            return this.generalStore.languages
        },
        // language(){
        //     return this.generalStore.sourceLang
        // }
    },
    mounted(){}
})
</script>

