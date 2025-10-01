<script setup lang="ts">
import { projects } from '@/data/projects';
</script>

<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h3 font-weight-bold mb-6">Projects</h2>
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
            <v-btn text :to="`/projects/${project.id}`">View Project</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
