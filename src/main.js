import { createApp } from "vue";
import "./assets/style/index.css";
import App from "./App.vue";
import StoryBlock from "./config/storyblock";

StoryBlock(app);

createApp(App).mount("#app");
