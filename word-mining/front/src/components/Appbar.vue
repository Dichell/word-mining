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
                    v-for="({name, path, icon}, index) in menu"
                    :to=path
                    :key=index
                    >
                    <v-icon size="x-large">{{icon}}</v-icon>
                        <v-tooltip
                            activator="parent"
                            location="bottom"
                        >{{name}}</v-tooltip>
                </v-btn>
                <v-divider vertical></v-divider>

                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn size="x-large" v-bind="props">
                            <v-icon size="xx-large">mdi-account-circle</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                            >
                                <v-list-item-title v-if="generalState.getIsAuth" >Log out</v-list-item-title>
                                <v-list-item-title v-else >Log in

                                    <a :href="getGoogleUrl()" class="google-auth">
                                        <span>Google</span>
                                    </a>

                                </v-list-item-title>
                        </v-list-item>
                        
                        <v-divider></v-divider>
                        
                        <v-list-item  v-if="generalState.getIsAuth"
                            >
                                <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </v-col>
        </v-row>
      </v-app-bar>
</template>

<script setup lang="ts">
// import { defineComponent } from "vue";
import useGeneralState from '@/store/general'
import { computed } from 'vue';

const generalState = useGeneralState()

const getGoogleUrl = () => {
            const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
        
            const options = {
                redirect_uri: "http://localhost:4130/api/users/sessions/oauth/google",
                client_id: "764465882098-oku22kun3j75rg9irekok4l5qhkkh91e.apps.googleusercontent.com",
                access_type: 'offline',
                response_type: 'code',
                prompt: 'consent',
                scope: [
                    'https://www.googleapis.com/auth/userinfo.profile',
                    'https://www.googleapis.com/auth/userinfo.email',
                ].join(' '),
                state: '/',
            };
        
            const qs = new URLSearchParams(options);
        
            return `${rootUrl}?${qs.toString()}`;
        }

const menu = computed(()=>{
    return generalState.menu
})

// export default {
//     name: 'Appbar',
// }
</script>