<template>
  <div class="has-text-centered has-background-warning-light box has-text-left">
    {{ winner.name }}
    <br />
    Email: {{ winner.email }}
    <br />
    Phone: {{ winner.phone }}
    <br />
    {{ date }}
    <br />
    Приз: {{ winner.prize }}
  </div>
</template>

<script setup>
const props = defineProps({
  winner: {
    type: Object,
    required: true,
  }
});

const date = new Date(props.winner.date).toLocaleDateString();

</script>