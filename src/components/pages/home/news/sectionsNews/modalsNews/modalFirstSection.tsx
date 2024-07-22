import React from "react";
import { Image } from "cloudinary-react";
import HomeImages from '../../../../../../assets';
import '../../../../../../styles';

const ModalFirstSection: React.FC = () => {
    return(
            <div className="modal fade" id="modal-1" tabIndex={-1} aria-hidden="true" aria-labelledby="aria-modal-1" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fw-bold">
                                Primer Expo Enfermería 2024
                            </h4>
                        </div>
                        <div className="modal-body">
                            <Image 
                                cloudName="nursingStaff" 
                                publicId={HomeImages.card1} 
                                className="img-fluid img-custom-home-modal"
                                alt=""
                            />
                            <div className="mt-4" 
                            style={{textAlign: 'justify'}}
                                >
                                <p>
                                    Nos complace haber realizado <strong>la primera exposición del año</strong>, donde destacados profesionales compartieron valiosas experiencias y actualizaciones en enfermería. 
                                </p>
                                <p>
                                    Fue un evento enriquecedor que promovió el intercambio de conocimientos y el <strong>fortalecimiento de nuestra comunidad profesional</strong>.
                                </p>
                                <p className="fw-bold">Servicios que participaron:</p>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10 col-md-8">
                                        <ul>
                                            <li>Enfermería de Partos</li>
                                            <li>Terapia Intensiva Pediátrica</li>
                                            <li>Terapia Intensiva de Adultos</li>
                                            <li>Guardia Central de Emergencias</li>
                                            <li>Neonatología</li>
                                            <li>Infectología</li>
                                            <li>Consultorios Externos</li>
                                            <li>Hemodiálisis</li>
                                            <li>Oncología</li>
                                            <li>CAPS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal">Volver</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ModalFirstSection;
