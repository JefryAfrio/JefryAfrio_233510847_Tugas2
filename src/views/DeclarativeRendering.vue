<template>
  <div class="declarative-rendering">
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('DeclarativeRendering')
</script>

<style lang="scss" scoped>
.declarative-rendering {
  p {
    font-size: 1.5rem;
  }
}
</style>