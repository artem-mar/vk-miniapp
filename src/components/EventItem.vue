<template>
  <div class="has-text-centered has-background-warning-light box has-text-left">
    {{ event.text }}
    <br />
    {{ eventDate }}
    <br />
    {{ eventTime }}
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
