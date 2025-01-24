import './assets/main.css'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { init as electronInit } from '@sentry/electron/renderer'
import { init as reactInit } from '@sentry/react'
import * as ReactSentry from '@sentry/react'
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes
} from 'react-router-dom'
import AppRoutes from './routes'
import App from './App'

electronInit(
  {
    integrations: [
      ReactSentry.reactRouterV6BrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      }),
      ReactSentry.replayIntegration()
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    // Learn more at
    // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
    tracesSampleRate: 1.0,

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    // Learn more at
    // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
    /* config */
  },
  reactInit
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes></AppRoutes>
    {/* <App></App> */}
  </React.StrictMode>
)
