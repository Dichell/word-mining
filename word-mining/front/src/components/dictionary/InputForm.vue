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
                >
                <template v-slot:append>
                    <v-sheet >
                        <BtnSearchWord />
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
// components
import BtnSearchWord from './BtnSearchWord.vue'

export default defineComponent({
    name: 'InputForm',
    components: { BtnSearchWord },
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    }
})
</script>

<style>
  .v-text-field input {
    font-size: 1.2em;
  }
</style>