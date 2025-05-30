<template>
  <div class="app">
    <Sidebar :is-mobile-open="isMobileSidebarOpen" @close-sidebar="isMobileSidebarOpen = false" />

    <main class="main-content">
      <transition name="fade-slide" mode="out-in">
        <router-view />
      </transition>
    </main>

    <button class="hamburger" @click="isMobileSidebarOpen = !isMobileSidebarOpen">
      ☰
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'

const isMobileSidebarOpen = ref(false)
</script>

<style lang="scss">
:root {
  --primary: #6366f1;
  --secondary: #14b8a6;
  --accent: #f59e0b;
  --bg-color: #f9fafb;
  --dark-bg: #1e293b;
  --text-color: #111827;
  --light: #f3f4f6;
  --white: #ffffff;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --sidebar-width: 250px;
}




* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

html,
body {
  height: 100%;
  background: var(--light);
  overflow: hidden;
}

.app {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: var(--light);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.hamburger {
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
    z-index: 1000;
    background-color: var(--primary);
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
  }
}
</style>
