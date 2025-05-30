<template>
  <aside :class="['custom-sidebar', { 'sidebar-hidden': isMobile && !isMobileOpen }]">
    <div class="sidebar-header">
      <img :src="logoURL" alt="Logo" class="logo" />
      <span class="brand-name">JefryAfrio</span>
    </div>

    <nav class="sidebar-nav">
      <router-link to="/DeclarativeRendering" class="nav-item">
        <span class="material-icons">dashboard</span>
        <span>Declarative Rendering</span>
      </router-link>
      <router-link to="/AttributeBindings" class="nav-item">
        <span class="material-icons">settings_input_component</span>
        <span>Attribute Bindings</span>
      </router-link>
      <router-link to="/ListRendering" class="nav-item">
        <span class="material-icons">format_list_bulleted</span>
        <span>List Rendering</span>
      </router-link>
      <router-link to="/ConditionalRendering" class="nav-item">
        <span class="material-icons">toggle_on</span>
        <span>Conditional Rendering</span>
      </router-link>
      <router-link to="/ComputedProperty" class="nav-item">
        <span class="material-icons">functions</span>
        <span>Computed Property</span>
      </router-link>
      <router-link to="/FormBindings" class="nav-item">
        <span class="material-icons">input</span>
        <span>Form Bindings</span>
      </router-link>
      <router-link to="/Lifecycle&TemplateRefs" class="nav-item">
        <span class="material-icons">timelapse</span>
        <span>Lifecycle & TemplateRefs</span>
      </router-link>
      <router-link to="/Watchers" class="nav-item">
        <span class="material-icons">visibility</span>
        <span>Watchers</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import logoURL from '../assets/logo1.png'
import { useWindowSize } from '@vueuse/core'

const props = defineProps({
  isMobileOpen: Boolean,
})
const emit = defineEmits(['close-sidebar'])

const isMobile = ref(false)

const { width } = useWindowSize()

watch(width, (val) => {
  isMobile.value = val <= 768
})

onMounted(() => {
  isMobile.value = width.value <= 768
  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.custom-sidebar')
    if (isMobile.value && props.isMobileOpen && !sidebar.contains(e.target)) {
      emit('close-sidebar')
    }
  })
})
</script>

<style scoped lang="scss">
.custom-sidebar {
  width: var(--sidebar-width);
  background: rgba(30, 41, 59, 0.85);
  backdrop-filter: blur(16px);
  color: var(--light);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: transform 0.4s ease-in-out, box-shadow 0.3s ease;
  box-shadow: 6px 0 20px rgba(0, 0, 0, 0.25);
  z-index: 999;
  overflow-y: auto;
}

.sidebar-hidden {
  transform: translateX(-100%);
  position: fixed;
}

.sidebar-header {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeIn 0.6s ease-in-out forwards;
}

.logo {
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  border-radius: 12px;
  border: 2px solid var(--primary);
  padding: 2px;
  background-color: white;
}

.brand-name {
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--primary);
  letter-spacing: 1px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  animation: fadeInUp 0.8s ease-in-out forwards;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.25rem;
  text-decoration: none;
  color: var(--light);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
}

.material-icons {
  font-size: 24px;
  transition: transform 0.25s ease;
}

.nav-item span:last-child {
  font-weight: 500;
  font-size: 1rem;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--primary);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
  transform: translateX(6px);
}

.nav-item:hover .material-icons {
  transform: scale(1.2) rotate(5deg);
}

.nav-item.router-link-exact-active {
  background: rgba(255, 255, 255, 0.12);
  color: var(--primary);
  box-shadow: inset 5px 0 0 var(--primary);
}

@media (max-width: 768px) {
  .custom-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    transform: translateX(0);
  }

  .sidebar-hidden {
    transform: translateX(-100%);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

