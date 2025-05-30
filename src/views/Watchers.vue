<template>
  <div class="watchers">
    <input v-model="name" placeholder="Enter name" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const name = ref('')

watch(name, (newVal, oldVal) => {
  console.log(`Name changed from ${oldVal} to ${newVal}`)
})
</script>

<style lang="scss" scoped>
.watchers {
  input {
    margin-bottom: 1rem;
  }
  p {
    font-style: italic;
  }
}
</style>