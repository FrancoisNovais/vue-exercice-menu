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
    <nav>
      <button v-for="element in itemsArray" :key="element.id" @click="pushElement(element)">
        {{ element.title }} <span>({{ element.category }})</span>
      </button>
    </nav>
  </header>
  <main>
    <div v-if="activeElement.category === 'article'">
      <h2>{{ activeElement.title }}</h2>
      <p>{{ activeElement.content }}</p>
      <p class="author" v-if="activeElement.author !== undefined">
        {{ activeElement.author.name }}
      </p>
      <p>{{ rate }}</p>
    </div>
    <div v-else-if="activeElement.category === 'livre'">
      <h2>{{ activeElement.title }}</h2>
      <p>{{ activeElement.synopsis }}</p>
      <p class="author">{{ activeElement.author }}</p>
      <p>{{ rate }}</p>
      <p class="badge" v-if="activeElement.numberOfPage < 250">Petit livre</p>
    </div>
    <h1 v-else>Faites votre choix</h1>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-height);
}
nav {
  display: flex;
  gap: 20px;
}
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
main {
  display: flex;
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
h2 {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.author {
  text-align: right;
}
.badge {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: var(--yellow);
  display: flex;
  text-align: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  right: -20px;
  top: -20px;
}
</style>
