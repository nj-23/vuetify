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
           <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
           <v-textarea label="Information" v-model="information" prepend-icon="mdi-pencil"></v-textarea>
           <v-btn text class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
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
        title: '',
        information: ''
      }
    },
    methods: {
      submit() {
        console.log(this.title, this.information)
      }
    }
  }
</script>

// test for commiting
// adding new line  