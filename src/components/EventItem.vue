<template>
  <div class="has-text-centered has-background-warning-light box has-text-left">
    <p class="mb-3">{{ event.text }}</p>
    <p class="has-text-right is-italic">
      <small>{{ eventDate }} {{ eventTime }}</small>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

const date = new Date(props.event.date)

const eventTime = `${date.getHours()}:${date.getMinutes()}`
const eventDate = date.toLocaleDateString()
</script>
