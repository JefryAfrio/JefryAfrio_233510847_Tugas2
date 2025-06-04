<template>
  <div class="conditional-rendering">
    <h1>🧩 Penjelasan Conditional Rendering di Vue 3</h1>

    <section class="explanation">
      <p>
        <strong>Conditional Rendering</strong> atau perenderan bersyarat adalah cara untuk menampilkan atau menyembunyikan elemen HTML
        berdasarkan kondisi tertentu dalam data komponen. Vue menyediakan directive seperti <code>v-if</code>, <code>v-else</code>,
        dan <code>v-show</code> untuk keperluan ini.
      </p>

      <p>
        Pada contoh ini, kita menggunakan <code>v-if</code> untuk menampilkan elemen paragraf <code>&lt;p&gt;</code> hanya jika
        nilai dari <code>show</code> adalah <code>true</code>. Kita juga memiliki tombol yang dapat mengubah nilai <code>show</code>
        dengan mengkliknya, sehingga pesan dapat ditampilkan atau disembunyikan secara interaktif.
      </p>
    </section>

    <h2>🎯 Contoh Penggunaan v-if</h2>

    <button @click="show = !show">Toggle Message</button>
    <p v-if="show">Halo Saya Jefry</p>

    <section class="tips">
      <h3>🧠 Kapan Menggunakan v-if?</h3>
      <ul>
        <li>✅ Saat ingin elemen hanya ada di DOM ketika kondisinya terpenuhi</li>
        <li>✅ Cocok untuk elemen yang berat atau jarang ditampilkan</li>
        <li>✅ Lebih hemat performa dibanding <code>v-show</code> dalam banyak kasus</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style lang="scss" scoped>
.conditional-rendering {
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

  h3 {
    font-size: 18px;
    margin-top: 24px;
    color: #34495e;
  }

  p {
    font-size: 17px;
    margin-bottom: 12px;
    line-height: 1.6;
  }


  button {
    margin-bottom: 1rem;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 6px;
    border: none;
    background-color: #42b983;
    color: white;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #36996f;
    }
  }

  code {
    background: #eef;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }

  ul {
    padding-left: 20px;
    li {
      margin-bottom: 6px;
    }
  }

  .tips {
    margin-top: 30px;
    background: #fffbe6;
    padding: 16px;
    border-left: 4px solid #f39c12;
    border-radius: 8px;
  }
}
</style>
