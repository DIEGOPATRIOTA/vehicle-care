<template>
    <v-app-bar
      app
      clipped-right
      flat
      height="72"
    >
      <v-app-bar-nav-icon @click.stop="mini = !mini" />

      <v-spacer></v-spacer>
      
      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>
</template>
<script lang="ts" src="./TheHeader.tsx" />
<style scoped src="./TheHeader.css"></style>