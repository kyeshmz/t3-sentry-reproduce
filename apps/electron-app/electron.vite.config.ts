import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      react()
      // sentryVitePlugin({
      //   org: process.env.SENTRY_ORG,
      //   project: process.env.SENTRY_PROJECT,
      //   authToken: process.env.SENTRY_AUTH_TOKEN,
      //   disable: process.env.NODE_ENV === 'development',
      //   telemetry: false,
      //   sourcemaps: {
      //     filesToDeleteAfterUpload: ['*/*.js.map', 'dist/*/*.js.map']
      //   }
      // })
    ]
  }
})
