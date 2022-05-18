import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/sveltejs/vite-plugin-svelte
    svelte(),

    // https://github.com/unocss/unocss
    Unocss()
  ]
})
