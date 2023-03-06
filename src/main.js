import App from './App.vue';
import { createApp } from 'vue';
import './assets/style';
import { StoryblokVue, StoryblokConfig } from './config/storyblok';

const app = createApp(App);

app.use(StoryblokVue, StoryblokConfig);
app.mount('#app');
