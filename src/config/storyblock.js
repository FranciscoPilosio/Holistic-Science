import { StoryblokVue, apiPlugin } from "@storyblok/vue";

app.use(StoryblokVue, {
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production
  use: [apiPlugin],
});
