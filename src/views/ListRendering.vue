<template>
  <div class="list-rendering">
    <h1>📋 Penjelasan List Rendering di Vue 3</h1>

    <section class="explanation">
      <p>
        <strong>List Rendering</strong> adalah fitur Vue yang memungkinkan kita menampilkan daftar data secara dinamis dengan menggunakan directive <code>v-for</code>.
        Directive ini akan mengulang elemen HTML untuk setiap item dalam array atau objek.
      </p>

      <p>
        Dalam contoh ini, kita memiliki sebuah array <code>items</code> yang berisi objek dengan properti <code>id</code> dan <code>name</code>.
        Dengan <code>v-for="item in items"</code> dan <code>:key="item.id"</code>, kita membuat elemen <code>&lt;li&gt;</code> untuk setiap item dalam daftar.
        Properti <code>key</code> berguna untuk memberikan identitas unik pada setiap elemen yang di-render agar Vue bisa melacak dan mengoptimalkan update DOM.
      </p>
    </section>

    <h2>🍽️ Contoh List Rendering</h2>

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

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0.5rem 0;
    font-size: 1.2rem;
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
