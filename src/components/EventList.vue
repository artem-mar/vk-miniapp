<template>
  <div class="container">
    <div class="columns is-flex-grow-1">
      <div class="column is-offset-one-quarter is-half">
        <p class="has-text-centered is-size-4 subtitle mb-3">События:</p>
        <EventItem class="mb-3" :key="event.id" v-for="event in events" :event="event" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import EventItem from './EventItem.vue'

const store = useStore()

store.dispatch('fetchEvents')
const events = computed(() => store.getters.getEvents)
</script>
