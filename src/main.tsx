import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.module.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './routes/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)