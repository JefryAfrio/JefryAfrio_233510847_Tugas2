<template>
  <div class="declarative-rendering">
    <h1>📢 Penjelasan Declarative Rendering di Vue 3</h1>

    <section class="explanation">
      <p>
        <strong>Declarative Rendering</strong> adalah cara Vue untuk secara otomatis menghubungkan data dengan tampilan
        (view) menggunakan sintaks template yang mudah dipahami. Dengan declarative rendering, kita hanya fokus pada data dan
        bagaimana data tersebut ingin ditampilkan tanpa harus menulis kode DOM secara manual.
      </p>

      <p>
        Dalam contoh ini, kita menggunakan <code>{{ message }}</code> di dalam template untuk menampilkan isi dari variabel <code>message</code>
        yang dideklarasikan menggunakan <code>ref</code>. Jika nilai <code>message</code> berubah, Vue akan otomatis memperbarui tampilan.
      </p>
    </section>

    <h2>✨ Contoh Declarative Rendering</h2>

    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('DeclarativeRendering')
</script>

<style lang="scss" scoped>
.declarative-rendering {
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
