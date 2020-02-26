<template>
<div class="projects">
  <h1 class="subtitle-1 grey--text">Projects</h1>
<v-expansion-panels accordion>
    <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>
            {{project.title}}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold">due by {{project.due}}</div>
            <div>{{project.content}}</div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</v-expansion-panels>

</div>
 
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {title:'design a new website', person: 'Nandish Jyothi', due: '1st Jan 2021', status: 'Ongoing', content: 'content of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project one ' },
        {title:'design a new website', person: 'dinesh', due: '1st Jan 2021', status: 'Ongoing', content: 'content of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project one' },
        {title:'design a new website', person: 'suraj', due: '1st Jan 2021', status: 'Ongoing', content: 'content of Project onecontent of Project onecontent of Project onecontent of Project one' },
        {title:'design a new website', person: 'Nandish Jyothi', due: '1st Jan 2021', status: 'Ongoing', content: 'content of Project onecontent of Project onecontent of Project onecontent of Project onecontent of Project one' }
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter (project => {
        return project.person === 'Nandish Jyothi'
      })
    }

  }

}
</script>