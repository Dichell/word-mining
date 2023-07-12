<template>
    <v-row>
        <v-col class="ma-2">
            <v-text-field
                clearable
                hide-details
                bg-color="blue-lighten-5"
                type="text"
                rounded="lg"
                variant="outlined"
                v-model=translateStore.textInput
                @keydown.enter.native.stop.prevent="sendToStore"
                >
                <template v-slot:append>
                    <v-sheet >
                        <BtnSearchWord @click="sendToStore"/>
                    </v-sheet>
                </template>
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// store
import useTranslateStore from '@/store/translate'
import usePronounceStore from '@/store/pronouncing'
// components
import BtnSearchWord from './BtnSearchWord.vue'

export default defineComponent({
    name: 'InputForm',
    components: { BtnSearchWord },
    data() {
        const translateStore = useTranslateStore()
        const pronounceStore = usePronounceStore()
        return { translateStore, pronounceStore }
    },
    methods: {
        sendToStore() {
            this.translateStore.updateTranslateObject("sourceText", this.translateStore.textInput)
            this.translateStore.translate()
            this.pronounceStore.updatePronounceData("text", this.translateStore.textInput)
        }
    }
})
</script>

<style>
  .v-text-field input {
    font-size: 1.2em;
  }
</style>