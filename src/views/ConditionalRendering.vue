<template>
  <div class="conditional-rendering">
    <button @click="show = !show">Toggle Message</button>
    <p v-if="show">Halo Saya Jefry</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style lang="scss" scoped>
.conditional-rendering {
  button {
    margin-bottom: 1rem;
  }
  p {
    color: green;
  }
}
</style>