import { StoryblokVue, apiPlugin } from "@storyblok/vue";


const StoryblokToken = import.meta.env.VITE_APP_ACCESS_TOKEN
const StoryblokConfig = {
  accessToken: StoryblokToken,
  bridge: import.meta.env.DEV,
  use: [apiPlugin],
};
export { StoryblokVue, StoryblokConfig, StoryblokToken };