<template>
<v-container>
    <v-row justify="center" >
        <v-col cols="5" md="4">
            <v-select
                v-model=sourceLanguage
                :items=sourceLanguages
                item-title="name"
                label="from"
                return-object
                @update:model-value="setSourceLang"
            ></v-select>
        </v-col>
        <v-col cols="2"  md="2" class="d-flex justify-center">
            <v-btn class="mt-2" @click="replaceLangs">
                <v-icon color="primary" size="large">mdi-arrow-u-left-bottom</v-icon>
            </v-btn>
        </v-col>
        <v-col cols="5" md="4">
            <v-select
                v-model=targetLanguage
                :items=targetLanguages
                item-title="name"
                label="to"
                return-object
                @update:model-value="setTargetLang"
            ></v-select>
        </v-col>
        <v-col md="2" class="d-none d-md-block">
            <BtnSearchWord />
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'
import { Ilanguages } from "@/types";
import BtnSearchWord from './BtnSearchWord.vue'

export default defineComponent({
    name: 'SelectLang',
    components: { BtnSearchWord },
    data() {
        const translatelStore = useTranslateStore()
        let sourceLanguage!: Ilanguages
        let targetLanguage!: Ilanguages
        return { translatelStore, sourceLanguage, targetLanguage }
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

