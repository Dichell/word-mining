<template>
    <TitleElement text="Translation"/>
    <v-sheet border rounded="lg" class="pa-5">
        <v-table>
            <tbody>
                <tr>
                    <td>
                        <v-sheet 
                            variant="text"
                            style="text-transform:uppercase; font-weight: bold; font-size: larger;"
                            >
                            {{ translateStore.translateObject.translatedText }}
                        </v-sheet>
                    </td>
                </tr>
                <tr>
                    <td>
                        <v-card variant="text">
                            {{ explanation }}
                        </v-card>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'
import TitleElement from '@/components/titles/TitleElement.vue'

export default defineComponent({
    name: 'Translate',
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    },
    components: { TitleElement },
    computed: {
        explanation(){
            return this.translateStore.getExplain
        }
    }
})
</script>

