import { Link } from "react-router-dom";
import "../css/header.css"
import logo from '../assets/logo.png';
import {GiHamburgerMenu} from "react-icons/gi"

export function Navigation() {
  return (
    <header className="header" id="header">
      <div className="container-header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="burguer"><GiHamburgerMenu/></div>
        <div className="nav-menu">
          <nav className="nave">
            <ul>
              <li className="nav-item">
                <Link to={"/"} className="nav-item-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/servicios"} className="nav-item-link">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-item-link">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-item-link">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
