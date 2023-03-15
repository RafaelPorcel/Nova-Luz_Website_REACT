import { Link } from "react-router-dom";

const MenuNav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/services">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/offers">Ofertas destacadas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/aboutUs">Nosotros/Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href=" ">Productos</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="index.html"><img src="/img/logo_nova.png" alt="logo NOVA-LUZ"
                    width="200px"></img></a>
            </div>
        </nav>
    )
}
export default MenuNav;