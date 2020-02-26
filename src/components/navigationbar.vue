<template>
    <nav>
        <v-app-bar flat app>
           <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">
                     todo
                </span>
                <span>
                   Tasks 
                </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- Drop down menu -->
            <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="grey">
            <v-icon left>mdi-chevron-down</v-icon> <!-- or use mdi-chevron-down -->
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

                <v-btn text color="grey">
                    <span>
                      Sign Out
                    </span>
                    <v-icon right>
                      mdi-logout
                    </v-icon>
                </v-btn>
       </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="primary">
        <v-row justify="center">
            <v-col cols="6">
            <v-avatar size="100">
            <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1">
              Nandish Jyothi
          </p>
        </v-col>

        <v-col>
          <Popup />
        </v-col>

      </v-row> 
          <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './popup'
export default {
  components: {Popup},
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-view-dashboard', text:'Dashboard', route: '/'},
                {icon: 'mdi-folder', text:'My projects', route: '/projects'},
                {icon: 'mdi-account', text:'Team', route: '/team'},

            ]
        }
    }
}
</script>

// testing for git