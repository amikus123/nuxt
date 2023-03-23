// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  runtimeConfig: {
    apiSecret: "123",
    public: {
      API_URL: process.env.API_URL || "default_api_url",
    },
  },
});
