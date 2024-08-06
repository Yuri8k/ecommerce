import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importar os componentes
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Registrar os componentes globalmente
app.component('HeaderComponent', HeaderComponent);
app.component('FooterComponent', FooterComponent);

app.mount('#app')
