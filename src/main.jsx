import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    Children:[
      {path: "/", element: <Home/>,}
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
