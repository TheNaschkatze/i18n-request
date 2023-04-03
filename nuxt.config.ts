// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        ["@storyblok/nuxt", { accessToken: "rtN4WQgtdI1PloeJSa8Jugtt" }],
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: ['en', 'fr', 'es'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: {
                    welcome: 'Welcome'
                },
                fr: {
                    welcome: 'Bienvenue'
                },
                es: {
                    welcome: 'Bienvenido'
                }
            }
        }
    }
})
