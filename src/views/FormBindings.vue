<template>
  <div class="form-bindings">
    <h1>📝 Penjelasan Form Bindings di Vue 3</h1>

    <section class="explanation">
      <p>
        <strong>Form Bindings</strong> di Vue memungkinkan kita menghubungkan data model dengan elemen form secara langsung menggunakan directive <code>v-model</code>.
        Ini membuat data input di form selalu sinkron dengan variabel di Vue, sehingga memudahkan pembuatan form interaktif tanpa harus menangani event input secara manual.
      </p>

      <p>
        Pada contoh ini, nilai dari <code>inputText</code> secara otomatis diperbarui setiap kali pengguna mengetik pada input text. 
        Begitu juga, nilai tersebut langsung ditampilkan kembali di paragraf menggunakan binding {{ inputText }}.
      </p>
    </section>

    <h2>💡 Contoh Form Binding dengan v-model</h2>

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

  input {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    margin-bottom: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
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
