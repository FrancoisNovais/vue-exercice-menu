<script setup>
import { ref } from 'vue'

const displayMoreText = ref(false)

const props = defineProps({
  activeElement: Object,
  rate: Number
})

const handleDisplay = () => {
  displayMoreText.value = !displayMoreText.value
}
</script>

<template>
  <div>
    <h2>{{ activeElement.title }}</h2>

    <div>
      <section
        :class="{
          // Utilisation d'une classe CSS dynamique et d'une valeur réactive pour gérer l'affichage complet/partiel du texte
          displayParagraph: displayMoreText
        }"
      >
        <p v-for="paragraph in activeElement.synopsis.split('\n')" class="paragraph">
          {{ paragraph }}
        </p>
      </section>
      <div class="iconCaret" @click="handleDisplay">
        <!-- Affichage conditionnel de l'icône selon la visibilité du texte -->
        <font-awesome-icon :icon="['fas', 'caret-down']" v-if="!displayMoreText" />
        <font-awesome-icon :icon="['fas', 'caret-up']" v-else />
      </div>
    </div>
    <p class="author">{{ activeElement.author }}</p>
    <p><font-awesome-icon :icon="['fas', 'thumbs-up']" v-if="rate > 0" /> {{ rate }}</p>
    <p class="badge" v-if="activeElement.numberOfPage < 250">Petit livre</p>
  </div>
</template>
<style scoped>
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
.paragraph {
  margin-bottom: 18px;
  line-height: 18px;
}
div > div {
  position: relative;
}
section {
  height: 110px;
  overflow: hidden;
}

.displayParagraph {
  height: fit-content;
  overflow: visible;
}
.iconCaret {
  position: absolute;
  bottom: -15px;
  right: 0;
  cursor: pointer;
}
</style>
