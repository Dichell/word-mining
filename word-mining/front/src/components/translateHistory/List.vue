<template>
    <v-table>
    <thead>
      <tr>
        <th class="text-left">
          from
        </th>
        <th class="text-left">
          to
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({sourceText, translatedText}, index) in translateStore.getHistory"
        :key="index"
        >
        <td>{{ sourceText }}</td>
        <td>{{ translatedText }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'

export default defineComponent({
    name: 'List',
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    }
})
</script>