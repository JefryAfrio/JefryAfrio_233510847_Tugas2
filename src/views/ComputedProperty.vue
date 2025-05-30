<template>
  <div class="computed-property">
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full name: {{ fullName }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Jefry')
const lastName = ref('Afrio')
// Saya menggunakan computed()
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
</script>

<style lang="scss" scoped>
.computed-property {
  input {
    display: block;
    margin: 0.5rem 0;
  }
  p {
    font-weight: bold;
  }
}
</style>