import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

// Fonts used above the fold (hero headline + body). Without a preload they are
// only discovered after the CSS is parsed, adding a hop to the critical chain.
const CRITICAL_FONTS = [
  /bodoni-moda-latin-500-(normal|italic)-[\w-]+\.woff2$/,
  /archivo-latin-400-normal-[\w-]+\.woff2$/,
]

function preloadCriticalFonts(): Plugin {
  return {
    name: 'preload-critical-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return
        return Object.keys(ctx.bundle)
          .filter((file) => CRITICAL_FONTS.some((re) => re.test(file)))
          .map((file) => ({
            tag: 'link',
            attrs: { rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
            injectTo: 'head' as const,
          }))
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadCriticalFonts()],
})
