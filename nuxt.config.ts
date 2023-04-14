// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    build: {
      sourcemap: false,
      modulePreload: {
        resolveDependencies: () => [],
      },
    },
  },
});
