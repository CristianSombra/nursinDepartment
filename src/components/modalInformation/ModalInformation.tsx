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
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle">Comunicado</h5>
                    </div>
                        <div className="modal-body text-center">
                            <Image cloudName="nursingStaff" publicId={ModalInformationImage.clock} className="my-3" style={{ borderRadius: '0' }} />
                            <h4>Todavía no hay capacitaciones.</h4>
                            <h6 className="text-muted my-3">Se está trabajando con la oficina de divisón de docencia e investigación.</h6>
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