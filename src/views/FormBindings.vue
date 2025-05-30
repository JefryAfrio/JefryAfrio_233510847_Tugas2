<template>
  <div class="form-bindings">
    <input v-model="inputText" placeholder="Type something..." />
    <p>You typed: {{ inputText }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
</script>

<style lang="scss" scoped>
.form-bindings {
  input {
    margin-bottom: 1rem;
  }
  p {
    color: #333;
  }
}
</style>