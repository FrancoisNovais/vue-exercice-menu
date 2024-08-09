<script setup>
import { ref, computed } from 'vue'

import Article from './components/Article.vue'
import Book from './components/Book.vue'
import Header from './components/Header.vue'

const activeElement = ref({})

// Lors du clic sur un bouton dans header, son objet est envoyé dans activeElement.
const pushElement = (object) => {
  activeElement.value = object
}

const rate = computed(() => {
  let sum = 0
  for (let i = 0; i < activeElement.value.rates.length; i++) {
    sum += activeElement.value.rates[i]
  }
  if (sum > 0) {
    return sum / activeElement.value.rates.length
  } else {
    return 'Pas encore de like'
  }
})
</script>

<template>
  <header>
    <Header @pushElement="pushElement" />
  </header>
  <main>
    <Article
      v-if="activeElement.category === 'article'"
      :active-element="activeElement"
      :rate="rate"
    />

    <Book
      v-else-if="activeElement.category === 'livre'"
      :active-element="activeElement"
      :rate="rate"
    />

    <h1 v-else>Faites votre choix</h1>
    <button @click="activeElement = {}">Reset</button>
  </main>
</template>

<style scoped>
header {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: var(--header-height);
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: calc(100vh - var(--header-height));
}
div {
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 20px;
  background-color: #ffdf9c;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}
button {
  position: absolute;
  right: 40px;
  bottom: 40px;
  background-color: var(--yellow);
  border: none;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
}
</style>
