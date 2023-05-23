<template>
      <v-app-bar
        color="primary"
        density="compact"
      >
        <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn size="x-large" v-bind="props">
                <v-icon size="xx-large">mdi-menu</v-icon>
            </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="{name, path, icon} in menu"
                :key=path
                :to=path
                >
                    <template v-slot:prepend>
                        <v-icon :icon=icon></v-icon>
                    </template>
                    <v-list-item-title>{{ name }}</v-list-item-title>
              </v-list-item>
            
              <v-divider></v-divider>
            
              <v-list-item
                to="about">
                    <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>

        <v-row class="d-flex justify-space-between align-center">
            <v-col class="d-flex">
                <v-app-bar-title class="d-none d-sm-flex justify-center">
                    Words Mining
                </v-app-bar-title>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn
                    size="large"
                    v-for="{name, path, icon} in menu"
                    :to=path
                    >
                    <v-icon size="x-large">{{icon}}</v-icon>
                        <v-tooltip
                            activator="parent"
                            location="bottom"
                        >{{name}}</v-tooltip>
                </v-btn>
            </v-col>
        </v-row>
      </v-app-bar>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Appbar',
    data() {
        return {
            menu: [
                {name: 'Dictionary', path: 'dictionary', icon: "mdi-book-open-variant"}, 
                {name: 'Translate History', path:'translate-history', icon: "mdi-history"}, 
                {name: 'Exercices', path: 'exercices', icon: "mdi-trophy-outline"}, 
                {name: 'Progress', path: 'progress', icon: "mdi-chart-areaspline"}
            ]
        }
    }
})
</script>