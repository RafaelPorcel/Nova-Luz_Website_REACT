import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container my-3">
            <footer className="text-white text-center text-lg-start bg-secondary">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">NOVA-LUZ</h5>
                            <p>
                                MÁS DE 20 AÑOS ILUMINANDO TU HOGAR Y TU NEGOCIO
                            </p>
                            <p>
                                ESPECIALÍSTAS EN ASESORAMIENTO PERSONALIZADO. VISÍTANOS
                            </p>
                        </div>
                        <div className="direccion col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Contacto</h5>
                            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                                <li className="mb-3 maps">
                                    <span className="ms-2">
                                        <Link to="/aboutUs#visitanos">
                                            Avda.
                                            Villanueva de Córdoba, 43 - Pozoblanco
                                        </Link>
                                    </span>
                                </li>
                                <li className="mb-3 telefono">
                                    <span className="ms-2">
                                        <a href="tel:+34957130334" rel="noreferrer">Tlfn: 957
                                            130 334
                                        </a>
                                    </span>
                                </li>
                                <li className="mb-3">
                                    <span className="ms-2 whatsapp">
                                        <a target="_blank" href="https://wa.me/34623450198" rel="noreferrer">WhatsApp: 623
                                            450 198
                                        </a>
                                    </span>
                                </li>
                                <li className="mb-3 correo">
                                    <span className="ms-2">
                                        <a target="_blank"
                                            href="mailto:iluminacion_novaluz@hotmail.com" rel="noreferrer">iluminacion_novaluz@hotmail.com
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">HORARIO</h5>
                            <table className="table text-center text-white">
                                <tbody className="fw-normal">
                                    <tr>
                                        <td>Lunes-Viernes:</td>
                                        <td>10:00/13:45 - 17:15/20:30</td>
                                    </tr>
                                    <tr>
                                        <td>Sábado:</td>
                                        <td>10:00-13:45</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <a className="text-white" href="index.html">novaluz.com</a>
                </div>
            </footer>
        </div>
    )
}
export default Footer;