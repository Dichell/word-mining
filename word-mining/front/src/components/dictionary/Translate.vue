<template>
    <v-container>
        <TitleElement text="Translation"/>
        <v-sheet border rounded="lg" class="pa-5">
            <v-table>
                <tbody>
                    <tr>
                        <td>
                            <v-card 
                                variant="text"
                                :title=translateStore.translateObject.translatedText
                                >
                            </v-card>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </v-container>
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
    components: { TitleElement }
})
</script>

