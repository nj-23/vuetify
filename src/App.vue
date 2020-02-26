<template>
  <v-app>
    <navigationbar />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import navigationbar from '@/components/navigationbar'
export default {
  name: 'App',
  components: {
    navigationbar
  },
  data: () => ({
    //
  }),
};
</script>
