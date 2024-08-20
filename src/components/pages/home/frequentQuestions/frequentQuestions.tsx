import React from "react";
import { Link } from "react-router-dom";
import "../../../../styles";

const FrequentQuestions: React.FC = () => {
    return (
        <main>
            <div className="accordion" id="accordion">
                <div className="accordion-item accordion-custom">
                    <h2 className="accordion-header" id="headingOne">
                        <button 
                            className="accordion-button accordion-custom" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                            aria-label="Pregunta sobre accidente en el lugar de trabajo"
                        >    
                                ¿Qué debo hacer si tengo un accidente en mi lugar de trabajo?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="my-3">
                                👉 Notificar <strong>inmediatamente</strong> al supervisor.
                            </p>
                            <p className="my-3">
                                👉 Llamar al <strong>0800-333-133</strong> (Provincia ART).
                            </p>
                            <p className="my-3">
                                👉 Dirigirse a la guardia central e informar lo sucedido al médico para que realice la <strong>planilla</strong> correspondiente.
                            </p>
                            <p className="my-3">
                                👉 Dirigirse a supervisión para realizar <strong>el informe</strong>, detallando exactamente cómo fue el incidente y datos del agente.
                            </p>
                            <p className="my-3">
                                ✅ Presentar todo en <strong>RRHH</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button 
                            className="accordion-button accordion-custom collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo"
                            aria-label="Pregunta sobre la solicitud de LAR o LEI"
                        >
                            ¿Con cuanto tiempo de anticipación debo solicitar las LAR o LEI?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="mt-3">La <strong>Licencia Anual Reglamentaria</strong> (LAR) deben solicitarse con 15 días de anticipación independientemente de la <strong>fracción</strong> que se requiera. En caso de excedido los 15 días, el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.
                            </p>
                            <p className="my-3">
                                ✅ Podrá ser utilizada durante todo el año.
                            </p>
                            <p className="my-3 mb-4">
                                🚫 No podrán adicionar en el día inmediato anterior ni posterior laborable de la Licencia Especial Invierno <strong>(LEI)</strong>.
                            </p>
                            <hr />
                            <p className="mt-3">Las <strong>Licencia Especial Invierno</strong> (LEI) deben solicitarse con una semana de anticipación. En caso de excedido la semana, el agente deberá consultar con su Jefe Inmediato (Jefe de servicio) y en caso de autorizarlas debe presentar una nota de <strong>fuera de término</strong>.</p>
                            <p className="my-3">
                                ✅ Podrá ser utilizada cualquier día de la semana, como menciona en en <strong>Artículo 6° del decreto 2024</strong>.
                            </p>
                            <p className="mt-3 mb-4">
                                🚫 No podrán adicionar en el día inmediato anterior ni posterior laborable a la LEI por razones particulares <strong>(art. 14F y 14H)</strong>, ni Licencia anual reglamentaria <strong>(LAR)</strong>.
                            </p>
                            <div className="text-center my-5">
                                <Link to="/licenses" className="btn-custom-secondary">
                                    Licencias
                                </Link>
                            </div>
                            <p className="my-3 text-center">
                                Ambas licencias deben ser enviadas por 
                                <a href="https://genexpediente.tdf.gob.ar/" className="text-decoration-none" target="_blank" rel="noopener noreferrrer">
                                    <strong> GEN EXPEDIENTE</strong>.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button 
                            className="accordion-button accordion-custom collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree"
                            aria-label="Pregunta sobre la solicitud de artículos 14F y 14H"
                        >
                            ¿Con cuanto tiempo de anticipación debo solicitar los artículos 14F y 14H?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="my-3">
                                ✅ Deben solicitarse con <strong>48 hs de anticipación</strong> al <strong>Jefe del Servicio</strong> y esperar su confirmación para ser autorizadas.
                            </p>
                            <p className="my-3">
                                👉 Pueden ser dadas de baja por <strong>razones de servicio.</strong>
                            </p>
                            <p className="my-3">
                                ✅ En la sección de <strong>Licencias</strong> puedes descargar el <strong>PDF Editable</strong> y presentarlo al <strong>Jefe de servicio</strong>, para su autorización.
                            </p>
                            <div className="text-center my-4">
                                <Link to="/licenses" className="btn-custom-secondary">
                                    Licencias
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button 
                            className="accordion-button accordion-custom collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFour" 
                            aria-expanded="false" 
                            aria-controls="collapseFour"
                            aria-label="Pregunta sobre permisos de salida"
                        >
                            ¿Cuáles son los pasos para solicitar un permiso de salida?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="my-3">
                                ✅ Debe solicitarse al <strong>jefe de servicio</strong> para su autorización. Una vez autorizado completar el formulario y presentar.
                            </p>
                            <p className="my-3">
                                ✅ En caso contrario que el Jefe directo se encuentre de licencia o no éste en la institución, deberá solicitarse al Supervisor de turno. En caso de autorizarse, deberá completar el formulario y presentar al Supervisor.
                            </p>
                            <p className="my-3">
                                👉 El agente debe devolverlo <strong>dentro de las 48 hs.</strong>
                            </p>
                            <p className="my-3">
                                ✅ Si es por un turno medico, presentar la <strong>constancia médica</strong> del turno y <strong>no</strong> se devuelve la hora.
                            </p>
                            
                            <div className="text-center my-4">
                                <Link to="/licenses" className="btn-custom-secondary">
                                    Licencias
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button 
                            className="accordion-button accordion-custom collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFive" 
                            aria-expanded="false" 
                            aria-controls="collapseFive"
                            aria-label="Pregunta sobre llegada tarde al trabajo"
                        >
                            ¿Qué debo hacer en caso de llegar tarde a mi puesto de trabajo?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                        <div className="accordion-body">                        
                            <p className="mt-3 mb-4">
                                ✅ La llegada tarde <strong>se contempla</strong> hasta <strong>10 minutos posterior a su inicio de jornada</strong>, y se debe notificar al <strong>Departamento de Enfermería</strong>.
                            </p>
                            <p className="mt-3 mb-4">
                                🚫 Caso contraro quedará como llegada tarde, siendo notificado RRHH.
                            </p>
                            <div className="text-center my-5">
                                <Link to="/contact" className="btn-custom-secondary">
                                    Contacto
                                </Link>
                                <p className="text-center text-muted mt-4">
                                    Buscar el <strong>WhatsApp Corporativo</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button 
                            className="accordion-button accordion-custom collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseSix" 
                            aria-expanded="false" 
                            aria-controls="collapseSix"
                            aria-label="Pregunta sobre acceso al GEN expediente"
                        >
                            ¿Cómo ingreso a mi GEN EXPEDIENTE?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingSix" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="mt-3 mb-4">
                                Para ingresar a tu GEN EXPEDIENTE debes utilizar el <strong>usuario y contraseña</strong> que te fue asignado para ingresar a la plataforma.
                            </p>
                            <p className="my-3">
                                👉 La página para ingresar es <strong><a href="https://genexpediente.tdf.gob.ar/" target="_blank" rel="noopener noreferrer">https://genexpediente.tdf.gob.ar/</a></strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                        <button 
                            className="accordion-button accordion-custom collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseSeven" 
                            aria-expanded="false" 
                            aria-controls="collapseSeven"
                            aria-label="Pregunta sobre olvido de usuario y contraseña en GEN EXPEDIENTE"
                        >
                            ¿Que pasos debo realizar si no recuerdo mi usuario y contraseña de mi GEN EXPEDIENTE?
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingSeven" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="mt-3 mb-4">
                                En el caso que no puedas ingresar a tu GEN EXPEDIENTE debes solicitar un <strong>usuario y contraseña</strong> para ingresar a la plataforma, solicitando un <strong>ticket de asistencia</strong>.
                            </p>
                            <p className="my-3">
                                👉 La página para ingresar es <strong><a href="https://ayuda.aif.gob.ar/" target="_blank" rel="noopener noreferrer">https://ayuda.aif.gob.ar/</a></strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button accordion-custom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            ¿Cómo ingreso a mi correo de ZIMBRA?
                        </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse accordion-custom collapse" aria-labelledby="headingEight" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <p className="mt-3 mb-4">
                                🚫 El correo ZIMBRA no se encuentra activo hasta el momento.
                            </p>
                        </div>
                    </div>
                </div>
    
            </div>
        </main>
    );
};

export default FrequentQuestions;