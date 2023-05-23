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
                        <BtnQuad @event="sendToStore" icon='mdi-magnify' />
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
import BtnQuad from '@/components/buttons/BtnQuad.vue'

export default defineComponent({
    name: 'InputForm',
    components: { BtnQuad },
    data() {
        const generalStore = useGeneralStore()
        let textInput = ""
        return { generalStore, textInput }
    },
    methods: {
        sendToStore(): void {
            this.generalStore.setSourceText()
        }
    },
    created() {
        this.textInput = this.generalStore.sourceText
    },
    mounted() {
        this.generalStore.mountSourceText()
    },
})
</script>

