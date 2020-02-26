<template>
<div class="team">
  <h1 class="subtitle-1 grey--text">Team</h1>

  <v-container class="my-5">
    <v-row wrap >
        <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
             <v-card
    class="mx-auto"
    max-width="344"
  >

      <v-row justify="center">
        <v-col cols="6">
          <v-avatar size="100">
            <img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />
          </v-avatar>
        </v-col>
      </v-row>

   
    

    <v-card-title>
      {{person.name}}
    </v-card-title>

    <v-card-subtitle>
      {{person.role}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>
       </v-card-actions>
       </v-card>
        </v-col>

    </v-row>
  </v-container>

</div>
 
</template>

<script>

export default {

    data() {
        return {
            team: [
                { name: 'The Net Ninja', role: 'Web developer' },
                { name: 'Ryu', role: 'Graphic designer' },
                { name: 'Chun Li', role: 'Web developer' },
                { name: 'Gouken', role: 'Social media maverick' },
                { name: 'Yoshi', role: 'Sales guru'}
      ]
        }

    }

}
</script>