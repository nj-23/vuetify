<template>
  <v-row justify="center">
    <v-btn
      color="grey"
      dark
      @click.stop="dialog = true"
    >
      Add a New Project
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="390"
    >
      <v-card>
        <v-card-title class="headline">Add a New Project</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

// test for commiting
// adding new line  