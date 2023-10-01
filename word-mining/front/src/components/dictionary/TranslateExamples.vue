<template>
        <TitleElement text="Examples"/>
        <v-sheet border rounded="lg" class="pa-5">
            <v-table>
                <tbody>
                    <tr v-for="{sourcePrefix, sourceTerm, sourceSuffix, targetPrefix, targetTerm, targetSuffix} in examples">
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
                    <v-sheet v-if="examples.length < 1">
                        <i>No examples</i>
                    </v-sheet>
                </tbody>
            </v-table>
        </v-sheet>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import TitleElement from '@/components/titles/TitleElement.vue'
import { IExamplesTranslations } from "@/types";

export default defineComponent({
    name: 'TranslateExamples',
    components: { TitleElement },
    props: {
        examples: {
            type: Object as PropType<IExamplesTranslations[]>,
            required: true
        }
    },
})
</script>

