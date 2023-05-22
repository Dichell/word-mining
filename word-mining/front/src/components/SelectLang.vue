<template>
    <v-row no-gutters class="d-flex justify-center">
        <v-select
            v-model=sourceLanguage
            :items=sourceLanguages
            item-title="name"
            label="from"
            return-object
            @update:model-value="setSourceLang"
        ></v-select>
        <v-btn class="mt-2" @click="replaceLangs">
            <v-icon color="primary" size="large">mdi-arrow-u-left-bottom</v-icon>
        </v-btn>
        <v-select
            v-model=targetLanguage
            :items=targetLanguages
            item-title="name"
            label="to"
            return-object
            @update:model-value="setTargetLang"
        ></v-select>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'
import { languages } from "@/types";

export default defineComponent({
    name: 'SelectLang',
    data() {
        const generalStore = useGeneralStore()
        let sourceLanguage: any
        let targetLanguage: any
        return { generalStore, sourceLanguage, targetLanguage }
    },
    methods: {
        setSourceLang(): void {
            this.generalStore.setSourceLang(this.sourceLanguage)
        },
        setTargetLang(): void {
            this.generalStore.setTargetLang(this.targetLanguage)
        },
        replaceLangs(): void {
            this.generalStore.reverseLangs()
        }
    },
    computed: {
        sourceLanguages(): languages[] {
            this.sourceLanguage = this.generalStore.sourceLang
            return this.generalStore.languages
        },
        targetLanguages(): languages[] {
            this.targetLanguage = this.generalStore.targetLang
            return this.generalStore.languages.filter(a => a.key != this.sourceLanguage.key)
        },
    },
    mounted() {
        this.generalStore.mountLangs()
    },

})
</script>

