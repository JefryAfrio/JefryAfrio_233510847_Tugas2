<template>
  <div class="lifecycle-template-refs">
    <h1>⚙️ Penjelasan Lifecycle dan Template Refs di Vue 3</h1>

    <section class="explanation">
      <p>
        Vue memiliki <strong>Lifecycle Hooks</strong> yang memungkinkan kita menjalankan kode pada fase tertentu dalam siklus hidup komponen, seperti ketika komponen selesai dimount ke DOM.
      </p>

      <p>
        <strong>Template Refs</strong> digunakan untuk mengakses langsung elemen DOM atau komponen anak dari template. Kita memberikan atribut <code>ref="namaRef"</code> pada elemen, lalu mendeklarasikan ref tersebut di script untuk mengaksesnya.
      </p>

      <p>
        Pada contoh ini, kita menggunakan <code>ref</code> untuk mengambil referensi elemen paragraf dan mengubah warna teksnya menjadi merah saat komponen sudah dipasang (mounted) di halaman menggunakan hook <code>onMounted</code>.
      </p>
    </section>

    <h2>🎯 Contoh Lifecycle dan Template Refs</h2>

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
  max-width: 600px;
  margin: 0px 0 100px 10px;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);

  h1 {
    font-size: 26px;
    color: #42b983;
    margin-bottom: 16px;
    border-bottom: 2px solid #42b983;
    padding-bottom: 6px;
  }

  h2 {
    font-size: 20px;
    margin-top: 24px;
    color: #2c3e50;
  }

  p {
    font-size: 17px;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  code {
    background: #eef;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }

  /* Hilangkan background dan border di penjelasan */
  .explanation {
    background: transparent;
    border: none;
    padding: 0;
  }
}
</style>
