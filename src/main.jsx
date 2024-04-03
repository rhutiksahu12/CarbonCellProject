import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WrapperContext from './context/WrapperContext.jsx'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrapperContext>
      <RouterProvider router={router} />
    </WrapperContext>
  </React.StrictMode>,
)
