<template>
  <div class="watchers">
    <h1>👀 Penjelasan Watchers di Vue 3</h1>

    <section class="explanation">
      <p>
        <strong>Watcher</strong> di Vue digunakan untuk "mengamati" perubahan pada data reaktif dan menjalankan fungsi tertentu ketika data tersebut berubah.
        Watcher berguna untuk melakukan side effects atau menjalankan kode tambahan saat data berubah, seperti validasi, pemanggilan API, atau logging.
      </p>

      <p>
        Dalam contoh ini, kita mengamati variabel <code>name</code> menggunakan fungsi <code>watch</code>. Setiap kali nilai <code>name</code> berubah,
        callback akan dijalankan dan mencetak perubahan nilai ke konsol browser, menunjukkan nilai lama dan nilai baru.
      </p>
    </section>

    <h2>💡 Contoh Watcher dengan v-model</h2>

    <input v-model="name" placeholder="Enter name" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const name = ref('')

watch(name, (newVal, oldVal) => {
  console.log(`Name changed from ${oldVal} to ${newVal}`)
})
</script>

<style lang="scss" scoped>
.watchers {
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
  input {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 15px;
    margin-bottom: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  code {
    background: #eef;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }

  .explanation {
    background: transparent;
    border: none;
    padding: 0;
  }
}
</style>
