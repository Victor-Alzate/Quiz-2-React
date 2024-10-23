import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/productos-biodegradables">Biodegradables</Link></li>
          <li><Link to="/contactenos">Contáctenos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

