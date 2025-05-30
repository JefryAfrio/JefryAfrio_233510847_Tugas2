<template>
  <div class="list-rendering">
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Ayam Goreng' },
  { id: 2, name: 'Mpek Mpek' },
  { id: 3, name: 'Batagor' }
])
</script>

<style lang="scss" scoped>
.list-rendering {
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0.5rem 0;
  }
}
</style>