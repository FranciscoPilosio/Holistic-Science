import { createApp } from 'vue'
import './assets/style/index.css'
import App from './App.vue'
import { StoryblokVue, StoryblokConfig } from "./config/storyblok";

const app = createApp(App);

app.use(StoryblokVue, StoryblokConfig)

app.mount('#app')
