<template>
  <div class="attribute-bindings">
    <!-- Judul utama -->
    <h1>🔧 Penjelasan Lengkap: Attribute Binding di Vue 3</h1>

    <!-- Penjelasan umum -->
    <section class="explanation">
      <p>
        <strong>Attribute Binding</strong> di Vue adalah teknik untuk menghubungkan atribut HTML dengan data dinamis
        yang berasal dari komponen. Hal ini memungkinkan kita untuk membuat elemen-elemen seperti <code>&lt;img&gt;</code>,
        <code>&lt;a&gt;</code>, atau <code>&lt;input&gt;</code> menjadi lebih fleksibel dan responsif terhadap data.
      </p>

      <p>
        Vue menyediakan directive <code>v-bind</code> yang bisa juga ditulis sebagai simbol singkat <strong>":"</strong>.
        Dengan ini, kita bisa "mengikat" data ke atribut HTML seperti <code>src</code>, <code>alt</code>, <code>href</code>, dll.
      </p>

      <p>
        Contohnya, pada gambar di bawah ini, atribut <code>src</code> akan mengikuti nilai dari data bernama <code>imageUrl</code>,
        dan atribut <code>alt</code> mengikuti <code>altText</code>. Perubahan nilai data tersebut akan langsung tercermin pada elemen gambar.
      </p>
    </section>

    <!-- Subjudul -->
    <h2>📌 Contoh Penggunaan Attribute Binding</h2>

    <!-- Gambar dengan attribute binding -->
    <div class="image-box">
      <img :src="imageUrl" :alt="altText" />
      <p class="caption">Gambar ini menggunakan <code>:src</code> dan <code>:alt</code> yang di-bind ke data Vue.</p>
    </div>

    <!-- Penjelasan tambahan -->
    <section class="bonus-info">
      <h3>🧠 Kenapa Harus Binding?</h3>
      <ul>
        <li>✅ Membuat elemen dinamis mengikuti data</li>
        <li>✅ Memudahkan manipulasi tampilan berdasarkan kondisi</li>
        <li>✅ Sangat berguna dalam pembuatan komponen interaktif</li>
      </ul>

      <h3>📎 Tips</h3>
      <p>
        Binding juga bisa digunakan untuk atribut boolean seperti <code>disabled</code>, <code>checked</code>, atau bahkan <code>class</code>.
        Semuanya bisa dihubungkan dengan data reactive menggunakan <code>v-bind</code> atau <code>:</code>.
      </p>
    </section>
  </div>
</template>

<script setup>
// Import ref dari Vue
import { ref } from 'vue'

// Data reactive yang akan di-bind ke atribut HTML
const imageUrl = ref('https://vuejs.org/images/logo.png')
const altText = ref('Logo Resmi Vue.js')
</script>

<style lang="scss" scoped>
.attribute-bindings {
  max-width: 1000px;
  margin: 0px 0 40px 10px; // Ubah dari 'auto' jadi spesifik ke kiri
  padding: 24px;
  background: #f9f9f9;
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden; // Tambahan opsional agar tidak overflow konten

  h1 {
    font-size: 28px;
    color: #42b983;
    margin-bottom: 16px;
    border-bottom: 2px solid #42b983;
    padding-bottom: 8px;
  }

  h2 {
    font-size: 22px;
    margin-top: 32px;
    margin-bottom: 12px;
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

  .image-box {
    margin-top: 20px;
    text-align: center;

    img {
      width: 120px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .caption {
      font-size: 14px;
      color: #666;
      margin-top: 8px;
    }
  }

  .bonus-info {
    margin-top: 40px;
    background: #fffbe6;
    padding: 16px;
    border-left: 4px solid #f39c12;
    border-radius: 8px;
  }
}
</style>

