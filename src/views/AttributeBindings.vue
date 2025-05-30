<template>
  <div class="attribute-bindings">
    <!-- Saya Menggunakan Attribute Binding = menggunakan v-bind / : -->
    <img :src="imageUrl" :alt="altText" />
  </div>
</template>

<script setup>
// Menggunakan Ref juga untuk attribute binding
import { ref } from 'vue'

const imageUrl = ref('https://vuejs.org/images/logo.png')
const altText = ref('Vue Logo')
</script>

<style lang="scss" scoped>
.attribute-bindings {
  img {
    width: 100px;
    border-radius: 8px;
  }
}
</style>