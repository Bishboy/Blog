import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import Blog from './page/Blog.jsx'
import About from './page/About.jsx'
import Services from './page/Services.jsx'
import Contact from './page/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
