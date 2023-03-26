<template>
  <div class="container">
    <div class="columns is-flex-grow-1">
      <div class="column is-offset-one-quarter is-half">
        <p class="has-text-centered is-size-4 subtitle mb-3">Наши победители:</p>
        <WinnerItem class="mb-3" :key="winner.id" v-for="winner in winners" :winner="winner" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import WinnerItem from './WinnerItem.vue'

const store = useStore()

store.dispatch('fetchWinners')
const winners = computed(() => store.getters.getWinnersWithHideFields)
</script>
