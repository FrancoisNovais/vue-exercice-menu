<script setup>
const props = defineProps({
  activeElement: Object,
  rate: Number
})
</script>
<template>
  <div>
    <h2>{{ activeElement.title }}</h2>
    <p v-for="paragraph in activeElement.content.split('\n')" class="paragraph">
      {{ paragraph }}
    </p>
    <p class="author" v-if="activeElement.author !== undefined">
      {{ activeElement.author.name }}
    </p>
    <p><font-awesome-icon :icon="['fas', 'thumbs-up']" v-if="rate > 0" /> {{ rate }}</p>
  </div>
</template>
<style scoped>
.paragraph {
  margin-bottom: 10px;
  line-height: 18px;
}
</style>
