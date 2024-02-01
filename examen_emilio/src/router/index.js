import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({  
  routes: [
    {
      path: '/',
      component : {
          render(h) {
              return h('router-view')
          },
      },
      children: [
          {
              path:'/',
              name: 'home',
              component: () => import('../views/Home.vue'),
              children:[
                {
                  path:'/',
                  name: 'landing',
                  component: () => import('../views/LandingPage.vue'),
                },
                {
                  path:'/carros',
                  name: 'carro',
                  component: () => import('../views/cars/CarManagement.vue'),
                },
                {
                  path:'/agregarCarro',
                  name: 'agregar',
                  component: () => import('../views/cars/InsertCar.vue'),
                },
              ]
          }
      ]
    }
  ]
})

export default router
