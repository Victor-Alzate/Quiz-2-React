
import Header from '../components/Header'
import { Link, Outlet } from 'react-router-dom'

const ProductosBiodegradables = () => {
  return (
    <div>
    <Header />
    <h1>Estos son los tipos de productos</h1>
    <section className='panel-control'>
        <aside>
            <nav>
                <Link to='tipos-de-productos'>Tipos de productos</Link>
            </nav>
        </aside>
        <div>
            <Outlet />
        </div>
    </section>
</div>
  )
}

export default ProductosBiodegradables