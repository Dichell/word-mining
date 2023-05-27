<template>
<v-container>
    <v-row>
        <v-col>
            <v-text-field
                :reverse="reverseText.value == 'hebrew' ? true : false"
                clearable
                bg-color="blue-lighten-5"
                type="text"
                :loading=translateStore.loading
                v-model=translateStore.textInput
                >
                <template v-slot:append>
                    <v-sheet class="d-md-none">
                        <BtnSearchWord />
                    </v-sheet>
                </template>
            </v-text-field>
        </v-col>
    </v-row>
</v-container>
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
    },
    computed: {
        reverseText(){
            return this.translateStore.getSourceLang
        }
    }
})
</script>

