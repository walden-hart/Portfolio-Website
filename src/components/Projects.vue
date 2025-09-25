<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Vue, Vuetify, and TypeScript.",
    link: "/projects/portfolio-website"
  },
  {
    title: "Call of Cthulhu Random Character Generator",
    description: "An app that will quickly generate a new Call of Cthulhu character sheet with random stats, occupations, and personal traits like name and age.",
    link: "/projects/character-generator"
  }
];
</script>

<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-8">Projects</h2>
      </v-col>

      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        md="4"
        class="mb-6"
      >
        <v-card>
          <v-card-title class="text-h6">{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
          <v-card-actions>
            <v-btn text :to="project.link">View Project</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
