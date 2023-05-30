<template>
<v-container>
    <v-row no-gutters class="d-flex align-center">
            <v-select
                v-model=sourceLanguage
                :items=sourceLanguages
                item-title="name"
                label="from"
                variant="outlined"
                hide-details="auto"
                rounded="s-xl"
                return-object
                @update:model-value="setSourceLang"
            ></v-select>
            <v-btn 
                class="mt-1"
                height="48px" 
                variant="tonal"
                rounded="0"
                @click="replaceLangs"   
                >
                <v-icon color="primary" size="large">mdi-arrow-u-left-bottom</v-icon>
            </v-btn>
            <v-select
                v-model=targetLanguage
                :items=targetLanguages
                item-title="name"
                label="to"
                variant="outlined"
                hide-details="auto"
                rounded="e-xl"
                return-object
                @update:model-value="setTargetLang"
            ></v-select>
            <BtnSearchWord md="2" class="d-none d-md-block mx-7"/>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Ilanguages } from "@/types";
// stores
import useTranslateStore from '@/store/translate'
import usePronouncingStore from '@/store/pronouncing'
// components
import BtnSearchWord from './BtnSearchWord.vue'

export default defineComponent({
    name: 'SelectLang',
    components: { BtnSearchWord },
    data() {
        const translatelStore = useTranslateStore()
        const pronouncinglStore = usePronouncingStore()
        let sourceLanguage!: Ilanguages
        let targetLanguage!: Ilanguages
        return { translatelStore, pronouncinglStore, sourceLanguage, targetLanguage }
    },
    methods: {
        setSourceLang(): void {
            this.translatelStore.updateTranslateObject("fromLangKey", this.sourceLanguage.key)
        },
        setTargetLang(): void {
            this.translatelStore.updateTranslateObject("toLangKey", this.targetLanguage.key)
        },
        replaceLangs(): void {
            this.translatelStore.reverseLangs()
            this.pronouncinglStore.togglePronounceLang()
        }
    },
    computed: {
        sourceLanguages(): Ilanguages[] {
            this.sourceLanguage = this.translatelStore.getSourceLang
            return this.translatelStore.languages
        },
        targetLanguages(): Ilanguages[] {
            this.targetLanguage = this.translatelStore.getTargetLang
            return this.translatelStore.languages.filter(a => a.key != this.sourceLanguage.key)
        }
    },
    mounted() {
        this.translatelStore.mountBaseTranslateSettings()
    },

})
</script>

