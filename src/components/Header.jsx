import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
    <header>
        <Link className="enlace" to="/contactenos">Contactenos</Link>
        <Link to="/productosBiodegradables">Productos Biodegradables</Link>
        <Link className="enlace" to="/Productos">Productos</Link>
    </header>
  )
}

export default Header