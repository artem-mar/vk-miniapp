<script setup>
import { RouterLink } from 'vue-router'

const routes = {
  Home: '/',
  Events: '/events',
  Winners: '/winners'
}
</script>

<template>
  <nav class="tabs is-toggle is-fullwidth">
    <ul>
      <li
        class="has-background-white"
        v-for="(route, title) in routes"
        :key="title"
        :class="{ 'is-active': $route.path === route }"
      >
        <RouterLink :to="route">{{ title }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
