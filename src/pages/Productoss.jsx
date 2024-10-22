
import Header from '../components/Header'
import { Link, Outlet } from 'react-router-dom'

const Productoss = () => {
    return (

        <div>
            <Header />
            <h1>Estos son los Productos</h1>
            <section className='panel-control'>
                <aside>
                    <nav>
                        <Link to='bolsas'>Bolsas</Link>
                        <Link to='envases'>Envses</Link>
                        <Link to='toallitas-Desechables'>Toallas desechables</Link>
                    </nav>
                </aside>
                <div>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}

export default Productoss