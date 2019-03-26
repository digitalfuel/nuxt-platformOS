# nuxt-platformos
Nuxt integration into PlatformOS

## Links

- 📘 Nuxt Documentation: [https://nuxtjs.org](https://nuxtjs.org)

## Features

- Adds `<pos>` block to .vue files allowing PlatformOS frontmatter and liquid markup

- Uses Nuxt generate to automatically compile, format and move generated output into PlatformOS

## Getting started

1. Install nuxt using create-nuxt-app **Exactly as below. Run from inside your project folder to install nuxt alongside marketplace_builder**  

    ```
    $ npx create-nuxt-app nuxt
    ```

   During nuxt installation:
   1. Choose between integrated server-side frameworks. **You must choose none**:
   - None (Nuxt default server)
   2. Choose your favorite UI framework. **You are free to choose**:
   - None (feel free to add one later)
   - [Bootstrap](https://github.com/bootstrap-vue/bootstrap-vue)
   - [Vuetify](https://github.com/vuetifyjs/vuetify)
   - [Bulma](https://github.com/jgthms/bulma)
   - [Tailwind](https://github.com/tailwindcss/tailwindcss)
   - [Element UI](https://github.com/ElemeFE/element)
   - [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
   - [Buefy](https://buefy.github.io/)
   3. Choose your favorite testing framework. **Not tested best choice is currently none**:
   - None (feel free to add one later)
   - [Jest](https://github.com/facebook/jest)
   - [AVA](https://github.com/avajs/ava)
   4. The [Nuxt mode you want (](https://nuxtjs.org/guide/release-notes#better-spa-experience)[Universal](https://nuxtjs.org/guide/release-notes#better-spa-experience)[)](https://nuxtjs.org/guide/release-notes#better-spa-experience) **You must choose Universal**.
   5. Add [axios module](https://github.com/nuxt-community/axios-module) to make HTTP request easily into your application. **You must choose yes to Axios**.
   6. Add [EsLint](https://eslint.org/) to Lint your code on save. **You are free to choose**.
   7. Add [Prettier](https://prettier.io/) to prettify your code on save. **You are free to choose**.
   
2. Download the nuxt-platformOS zip and copy the files into your project. Choose to replace files if asked.
3. Update package.json adding the config and scripts below.

    ```
    {
    "config": {
        "nuxt": {
        "port": "8000"
        }
    },
    "scripts": {
        "staging": "cross-env POS\_ENV=staging nuxt generate",
        "production": "cross-env POS\_ENV=production nuxt generate"
        }
    }
    ```

4. Install dependencies using CLI
   1. cheerio > `npm i cheerio --save-dev `
   2. webpack-merge > `npm i webpack-merge --save-dev `
   3. nuxt-vuex-router-sync > `npm i nuxt-vuex-router-sync`
   4. dotenv > `npm i dotenv`
   5. cross-env > `npm i webpack-merge`

5. Update enviroment variable
   
   Locate the .env file in the yourProject/nuxt update the enviroment variable to your own and change any default settings. Currently the only way to get the CDN url is to use this liquid {{ '' | asset_url }} on a page then inspect the element and copy the full url ending with .../assets.

## Build Setup

``` bash
# serve with hot reload at localhost:8000
$ npm run dev

# Generate for staging and production
$ npm run staging
$ npm run production
```

## Contribute

If you wish to contribute. Feel free to create a pull request, issue or contact daniel@digitalfuel.co.nz

## Security

If you discover a security vulnerability regarding Nuxt – PlatformOS integration, please send an e-mail to daniel@digitalfuel.co.nz! All security vulnerabilities will be promptly addressed.

## Version 0.01 alpha

Nuxt - PlatformOS intergration is in trial. Please use with caution at your own risk. I would suggest currently only using this on a test instance or a project of your own.

## License

[MIT]

