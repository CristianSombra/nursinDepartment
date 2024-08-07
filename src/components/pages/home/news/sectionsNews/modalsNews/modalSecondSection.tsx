import React from "react";
import { Image } from "cloudinary-react";
import HomeImages from '../../../../../../assets';
import '../../../../../../styles';

const ModalSecondSectionA: React.FC = () => {
    return(
            <div className="modal fade" id="modal-2" tabIndex={-1} aria-hidden="true" aria-labelledby="aria-modal-2" data-bs-backdrop="static" role="dialog">
                <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 id="aria-modal-2" className="modal-title fw-bold">
                                Colaboración
                            </h4>
                        </div>
                        <div className="modal-body">
                            <Image 
                                cloudName="nursingStaff" 
                                publicId={HomeImages.card2} 
                                className="img-fluid img-custom-home-modal" 
                                alt="Agradecimiento a instituciones colaboradoras con la Expo de Enfermería"/>
                            <div
                                className="mt-4" 
                                style={{textAlign: 'justify'}}
                            >
                                <p>Expresamos nuestro sincero <strong>agradecimiento</strong> a las siguientes instituciones:</p>
                                <ul>
                                    <li>Colegio Público de Profesionales de Enfermería.</li>
                                    <li>Asociación Trabajadores de la Sanidad Argentina filial Tierra del Fuego <strong>(ATSA)</strong>.</li>
                                    <li>Asociación de Trabajadores del Estado Seccional Rio Grande <strong>(ATE)</strong>.</li>
                                </ul>
                                <p>Su apoyo va más allá de lo material, inspirándonos a fortalecer nuestra labor en beneficio de la comunidad de enfermería.</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal" aria-label="Cerrar modal">Volver</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const ModalSecondSectionB: React.FC = () => {
    return(
            <div className="modal fade" id="modal-3" tabIndex={-1} aria-hidden="true" aria-labelledby="aria-modal-3" data-bs-backdrop="static" role="dialog">
                <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 id="aria-modal-3" className="modal-title fw-bold">
                                Último break de la Expo
                            </h4>
                        </div>
                        <div className="modal-body">
                            <Image 
                                cloudName="nursingStaff" 
                                publicId={HomeImages.card3} 
                                className="img-fluid" 
                                alt="Momento de camaradería y colaboración en el último break de la Expo"/>
                            <div 
                                className="mt-4" 
                                style={{textAlign: 'justify'}}
                                >
                                    <p>En el último break, tuvimos el privilegio de compartir un <strong>momento de camaradería y colaboración</strong> junto a destacados <strong>disertantes</strong>, <strong>colegas profesionales</strong> y <strong>estudiantes del Cent35</strong>.</p>
                                    <p>Fue una oportunidad invaluable para intercambiar ideas, experiencias y fortalecer nuestra red de contactos en el campo de la enfermería. Estos encuentros no solo enriquecen nuestro conocimiento, sino que también fortalecen los lazos que nos unen como comunidad profesional. Es inspirador ver cómo juntos podemos avanzar hacia un futuro de excelencia en el cuidado de la salud.</p>
                                    <p><strong>Agradecemos a todos los participantes</strong> por su compromiso y dedicación, y esperamos seguir colaborando juntos en futuros eventos y proyectos.</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal" aria-label="Cerrar modal">Volver</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export {
    ModalSecondSectionA,
    ModalSecondSectionB
}
