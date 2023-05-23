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
            <BtnQuad @event="sendToStore" icon='mdi-magnify' />
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'
import { languages } from "@/types";
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'SelectLang',
    components: { BtnQuad },
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
        },
        sendToStore(): void {
            this.generalStore.setSourceText()
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

