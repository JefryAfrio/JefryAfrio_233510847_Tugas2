<template>
  <div class="computed-property">
    <h1>🧮 Penjelasan Computed Property di Vue 3</h1>

    <section class="explanation">
      <p>
        <strong>Computed Property</strong> di Vue digunakan untuk membuat data turunan (derived data) yang otomatis
        diperbarui saat nilai yang digunakan di dalamnya berubah. Ini sangat berguna untuk menggabungkan atau
        memanipulasi data tanpa harus menuliskan ulang logika di banyak tempat.
      </p>

      <p>
        Dalam contoh ini, kita memiliki dua input: <code>firstName</code> dan <code>lastName</code>. Kita ingin 
        menampilkan nama lengkap secara otomatis ketika salah satu dari dua input ini berubah. Alih-alih 
        menggunakan metode atau menuliskannya di template, kita gunakan <code>computed()</code> agar lebih efisien
        dan reactive.
      </p>
    </section>

    <h2>🧪 Contoh Computed Full Name</h2>

    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full name: {{ fullName }}</p>

    <section class="tips">
      <h3>💡 Kelebihan Computed</h3>
      <ul>
        <li>✅ Nilainya otomatis diperbarui saat dependency-nya berubah</li>
        <li>✅ Lebih efisien dibanding method karena hasilnya di-cache</li>
        <li>✅ Cocok untuk manipulasi data di tampilan</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Jefry')
const lastName = ref('Afrio')

const fullName = computed(() => `${firstName.value} ${lastName.value}`)
</script>

<style lang="scss" scoped>
.computed-property {
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
    margin: 20px 0 12px;
    color: #2c3e50;
  }

  input {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    margin-bottom: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
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

  .tips {
    margin-top: 30px;
    background: #fffbe6;
    padding: 16px;
    border-left: 4px solid #f39c12;
    border-radius: 8px;
  }
}
</style>
