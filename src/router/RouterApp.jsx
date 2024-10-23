import { createBrowserRouter } from 'react-router-dom'
import ProductosBiodegradables from '../pages/ProductosBiodegradables'
import Productos from '../pages/Productoss'
import Home from '../pages/Home'
import Bolsas from '../pages/todosLosProductos/Bolsas'
import Envases from '../pages/todosLosProductos/Envases'
import ToallitasDesechables from '../pages/todosLosProductos/ToallitasDesechables'
import TiposDeProductos from '../pages/tiposs/TiposDeProductos'
import Contactenos from '../pages/Contactenos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contactenos',
    element: <Contactenos />,
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
      },
      {
        path: 'toallitas-desechables',
        element: <ToallitasDesechables />,
      },
    ],
  },
  {
    path: '/productos-biodegradables',
    element: <ProductosBiodegradables />,
    children: [
      {
        path: 'tipos-de-productos',
        element: <TiposDeProductos />,
      },
    ],
  },
]);

export default router;
