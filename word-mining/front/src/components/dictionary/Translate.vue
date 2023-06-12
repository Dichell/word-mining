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
                            {{ translateStore.getTranslateObject.translatedText }}
                        </v-sheet>
                    </td>
                </tr>
                <tr>
                    <td>
                        <v-card variant="text">
                            {{ translateStore.getExplain }}
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
    components: { TitleElement },
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    }
})
</script>

