<template>    
    <v-navigation-drawer
      v-model="drawer"
      app
      width="300"
      :mini-variant.sync="mini"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://avatars.githubusercontent.com/u/8749640?v=4"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{userName}}</v-list-item-title>
        
      </v-list-item>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" src="./TheSidebar.tsx" />
<style scoped src="./TheSidebar.css"></style>