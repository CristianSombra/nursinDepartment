import React from "react";
import { Image } from "cloudinary-react";
import ModalInformationImage from "../../assets";

/* Notificación sin novedad */
export const ModalInformationA: React.FC = () => {
    return(
        <div className="col">
            <div
                className="modal fade"
                id="modal-4"
                tabIndex={-1}
                aria-hidden="true"
                aria-labelledby="aria-modal-4"
                role="dialog"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 id="aria-modal-4" className="modal-tittle">Comunicado</h3>
                    </div>
                        <div className="modal-body text-center">
                            <Image 
                                cloudName="nursingStaff" 
                                publicId={ModalInformationImage.clock} 
                                className="my-3" 
                                style={{ borderRadius: '0' }}
                                alt="Imagen del reloj que indica la falta de capacitaciones"
                                />
                            <h4>Todavía no hay capacitaciones.</h4>
                            <h5 className="text-muted my-3">Se está trabajando con la oficina de divisón de docencia e investigación.</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-custom-primary" data-bs-dismiss="modal">Volver</button>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    )
};