<template>
      <v-responsive
        >
            <v-text-field
                class="mx-4 pa-2"
                type="text"
                v-model=textInput
                append-inner-icon="mdi-magnify"
                @click:append-inner="sendToStore"
                ></v-text-field>
    </v-responsive>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from '@/store/general'

export default defineComponent({
    name: 'InputForm',
    data() {
        const generalStore = useGeneralStore()
        const textInput = "שלום"
        return { generalStore, textInput }
    },
    methods: {
        sendToStore(){
            this.generalStore.setSourceText(this.textInput)
        }
    }
})
</script>

