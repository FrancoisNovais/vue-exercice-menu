<script setup>
import { ref, computed } from 'vue'
import itemsArray from './assets/data.json'

const activeElement = ref({})

// Lors du clic sur un bouton dans header, son objet est envoyé dans activeElement.
const pushElement = (object) => {
  activeElement.value = object
  //   console.log(activeElement.value.category)
}

const rate = computed(() => {
  let sum = 0
  for (let i = 0; i < activeElement.value.rates.length; i++) {
    sum += activeElement.value.rates[i]
  }
  if (sum > 0) {
    return sum
  } else {
    return 'Pas encore de like'
  }
})
</script>

<template>
  <header>
    <button v-for="element in itemsArray" :key="element.id" @click="pushElement(element)">
      {{ element.title }} <span>{{ element.category }}</span>
    </button>
  </header>
  <main>
    <div v-if="activeElement.category === 'article'">
      <h2>{{ activeElement.title }}</h2>
      <p>{{ activeElement.content }}</p>
      <p v-if="activeElement.author !== undefined">{{ activeElement.author.name }}</p>
      <p>{{ rate }}</p>
    </div>
    <div v-else-if="activeElement.category === 'livre'">
      <h2>{{ activeElement.title }}</h2>
      <p>{{ activeElement.synopsis }}</p>
      <p>{{ activeElement.author }}</p>
      <p>{{ rate }}</p>
      <span v-if="activeElement.numberOfPage < 250">Petit livre</span>
    </div>
    <div v-else><h1>Faites votre choix</h1></div>
  </main>
</template>

<style scoped></style>
