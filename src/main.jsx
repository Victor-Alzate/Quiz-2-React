import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contactenos from './pages/Contactenos'
import ProductosBiodegradables from './pages/ProductosBiodegradables'
import Productos from './pages/Productoss'
import Home from './pages/Home'
import Bolsas from './pages/todosLosProductos/Bolsas'
import Envases from './pages/todosLosProductos/Envases'
import ToallitasDesechables from './pages/todosLosProductos/ToallitasDesechables'
import TiposDeProductos from './pages/tiposs/TiposDeProductos'

let router = createBrowserRouter([
  {
    path: '/contactenos',
    element: <Contactenos />
  },
  {
    path: '/productos',
    element: <Productos />,
    children: [
      {
        path: 'bolsas',
        element: <Bolsas />,
      },
      {
        path: 'envases',
        element: <Envases />,
      },{
        path: 'toallitas-Desechables',
        element: <ToallitasDesechables />,
        
      }
    ]
  },
  {
    path: '/productosBiodegradables',
    element: <ProductosBiodegradables />,
    children: [
      {
        path: 'tipos-De-Productos',
        element: <TiposDeProductos />,
      }
    ]
  },
  {
    path: '/',
    element: <Home />
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)