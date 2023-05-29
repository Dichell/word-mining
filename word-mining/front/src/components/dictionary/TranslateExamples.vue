<template>
    <v-container>
        <TitleElement text="Examples"/>
        <v-sheet border rounded="lg" class="pa-5">
            <v-table>
                <tbody>
                    <tr v-for="{sourcePrefix, sourceTerm, sourceSuffix, targetPrefix, targetTerm, targetSuffix} in translateStore.examplesTranslations">
                        <td>
                            <v-sheet dir="auto">
                                {{ sourcePrefix }} <b>{{ sourceTerm }}</b> {{ sourceSuffix }}
                            </v-sheet>
                        </td>
                        <td>
                            <v-sheet dir="auto"
                                :style="{color: 'grey', paddingLeft: '10px'}"
                                >
                                {{ targetPrefix }}<b>{{ targetTerm }}</b>{{ targetSuffix }}
                            </v-sheet>
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
    name: 'TranslateExamples',
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    },
    components: { TitleElement }
})
</script>

