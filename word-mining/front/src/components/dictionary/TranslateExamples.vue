<template>
    <v-container>
        <TitleElement text="Examples"/>
        <v-container>
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
        </v-container> 
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

