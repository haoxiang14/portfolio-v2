// https://nuxt.com/docs/api/configuration/nuxt-config

// import { defineNuxtConfig } from 'nuxt/config';


export default ({
  app: {
    head: {
      title: "Hao Xiang's Portfolio",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', "@nuxt/image"],
  compatibilityDate: '2024-08-26'
});