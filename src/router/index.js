import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/cursos',
      name: 'cursos',
      props: true,
      component: () => import('@/views/Cursos.vue'),
      children: [
        {
          path: ":curso",
          name: 'curso',
          props: true,
          component: () => import('@/views/Curso.vue'),
          children: [
            {
              path: "aulas",
              name: 'aulas',
              component: () => import('@/views/CursoAulas.vue'),
            },
            {
              path: "descricao",
              name: 'descricao',
              component: () => import('@/views/CursoDescricao.vue'),
            }
          ]
        }
      ]
    },
  ]
})

export default router
