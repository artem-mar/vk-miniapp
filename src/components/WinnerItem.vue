<template>
  <div class="has-text-centered has-background-warning-light box has-text-left is-size-6">
    <p class="is-size-5 mb-2">{{ winner.name }}</p>
    <p>Email: {{ winner.email }}</p>
    <p>Телефон: {{ winner.phone }}</p>
    <p>Приз: {{ winner.prize }}</p>
    <p class="has-text-right is-italic"><small>{{ date }}</small></p>
  </div>
</template>

<script setup>
const props = defineProps({
  winner: {
    type: Object,
    required: true
  }
})

const date = new Date(props.winner.date).toLocaleDateString()
</script>
