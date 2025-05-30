<template>
  <div class="lifecycle-template-refs">
    <p ref="paragraph">Lifecycle&TemplateRefs</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const paragraph = ref(null)

onMounted(() => {
  if (paragraph.value) {
    paragraph.value.style.color = 'red'
  }
})
</script>

<style lang="scss" scoped>
.lifecycle-template-refs {
  p {
    font-size: 1.5rem;
  }
}
</style>