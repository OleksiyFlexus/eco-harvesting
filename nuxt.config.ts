// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/image", "@nuxt/scripts", "nuxt-svgo", "@nuxtjs/google-fonts"],

  components: [{ path: "~/components", pathPrefix: false }],
  css: ["@/styles/main.css"],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      "Open+Sans": true,
    },
    display: "swap",
    preload: true,
    download: false,
  },
});
