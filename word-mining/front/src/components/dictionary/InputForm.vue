<template>
<v-container>
    <v-row>
        <v-col>
            <v-text-field
                clearable
                bg-color="blue-lighten-5"
                type="text"
                v-model=generalStore.inputText
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
import useGeneralStore from '@/store/general'
import BtnSearchWord from './BtnSearchWord.vue'

export default defineComponent({
    name: 'InputForm',
    components: { BtnSearchWord },
    data() {
        const generalStore = useGeneralStore()
        let textInput = ""
        return { generalStore, textInput }
    },
    created() {
        this.textInput = this.generalStore.sourceText
    },
    mounted() {
        this.generalStore.mountSourceText()
    },
})
</script>

