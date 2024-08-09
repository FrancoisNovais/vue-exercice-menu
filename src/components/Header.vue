<script setup>
import itemsArray from '../assets/data.json'

const emit = defineEmits(['pushElement'])
</script>
<template>
  <button v-for="element in itemsArray" :key="element.id" @click="$emit('pushElement', element)">
    {{ element.title }} <span>({{ element.category }})</span>
  </button>
</template>
<style scoped>
button {
  background-color: white;
  padding: 10px;
  border: 2px solid var(--yellow);
  color: var(--yellow);
  font-weight: bold;
}
span {
  color: black;
}
</style>
