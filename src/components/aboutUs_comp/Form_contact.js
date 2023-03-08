import { Link } from "react-router-dom";
import { validateForm } from "./Validator_form";

const Form = () => {
    return (
        <section class="mb-4 formulario container">

            <div class="row align-items-center">
                <h2 id="contacta" class="h1-responsive font-weight-bold text-center my-4">Contacta con nosotros</h2>
                <p class="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? No dudes en ponerte en
                    contacto con nosotros y te responderemos lo antes posible.</p>
                <div className="row contacta">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="enviar_correo.php" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"
                                            placeholder="Introduce tu nombre"></input>
                                        <br></br>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"
                                            placeholder="Introduce tu E-Mail"></input>
                                        <br></br>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control"
                                            placeholder="Introduce asunto"></input>
                                        <br></br>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2"
                                            className="form-control md-textarea" placeholder="Mensaje"></textarea>
                                        <br></br>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left">
                            <button className="btn btn-primary" onClick={validateForm}>Enviar</button>
                        </div>
                        <div id="status"></div>
                    </div>

                    <div className="col-md-3 text-center contacto_link">
                        <ul className="list-unstyled mb-0 fa-ul">
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
                </div>
            </div>
        </section>
    );
};
export default Form;