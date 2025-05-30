import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/DeclarativeRendering'
    },
    {
      path: '/AttributeBindings',
      name: 'AttributeBindings',
      component: () => import('../views/AttributeBindings.vue')
    },
    {
      path: '/ComputedProperty',
      name: 'ComputedProperty',
      component: () => import('../views/ComputedProperty.vue')
    },
    {
      path: '/ConditionalRendering',
      name: 'ConditionalRendering',
      component: () => import('../views/ConditionalRendering.vue')
    },
    {
      path: '/DeclarativeRendering',
      name: 'DeclarativeRendering',
      component: () => import('../views/DeclarativeRendering.vue')
    },
    {
      path: '/FormBindings',
      name: 'FormBindings',
      component: () => import('../views/FormBindings.vue')
    },
    {
      path: '/Lifecycle&TemplateRefs',
      name: 'Lifecycle&TemplateRefs',
      component: () => import('../views/Lifecycle&TemplateRefs.vue')
    },
    {
      path: '/ListRendering',
      name: 'ListRendering',
      component: () => import('../views/ListRendering.vue')
    },
    {
      path: '/Watchers',
      name: 'Watchers',
      component: () => import('../views/Watchers.vue')
    }
  ]
});

export default router;
