import React from "react";
import { Image } from "cloudinary-react";
import { motion } from "framer-motion";
import { ModalQuestionLAR, ModalQuestionLEI, Modal14F, Modal14H } from "../modalLicenses/ModalLicenses";
import LicensesImages from "../../../../assets";

const LicensesFirstSection: React.FC = () => {

    const basePath = '/';
    const pdfPath = basePath + "licences/";

    return(
        <div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={LicensesImages.cardLar}
                            className="img-fluid" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia especial verano</h4>
                    <p className="mb-4">Se puede tomar desde diciembre a diciembre de cada año. Se debe solicitar al Jefe del servicio con <strong>15 días de anticipación</strong>.</p>
                    <div className="text-center text-md-center mt-3 mb-5">
                        <a href={pdfPath + "LAR.pdf"} target="_blank" rel="noreferrer" className="btn-custom-primary">Descargar formulario</a>
                    </div>
                    <div className="text-center text-md-center">    
                        <span 
                            data-bs-toggle="modal"
                            data-bs-target="#modal-5"
                            className="btn-custom-secondary"
                            style={{ cursor: 'pointer'}}
                            >
                                Preguntas frecuentes
                        </span>
                        <ModalQuestionLAR/>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={LicensesImages.cardLei}
                            className="img-fluid" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia especial invierno</h4>
                    <p className="mb-4">Se puede tomar desde junio a noviembre de cada año. Se debe solicitar al jefe del servicio con <strong>un semana de anticipación</strong>.</p>
                    <div className="text-center text-md-center mt-3 mb-5">
                        <a href={pdfPath + "LEI.pdf"} target="_blank" rel="noreferrer" className="btn-custom-primary">Descargar formulario</a>
                    </div>
                    <div className="text-center text-md-center">    
                        <span 
                            data-bs-toggle="modal"
                            data-bs-target="#modal-6"
                            className="btn-custom-secondary"
                            style={{ cursor: 'pointer'}}
                            >
                                Preguntas frecuentes
                        </span>
                        <ModalQuestionLEI/>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={LicensesImages.card14F}
                            className="img-fluid" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia artículo 14F</h4>
                    <p className="mb-4">Esta licencia se puede tomar dentro del año en curso, no aplica descuento, son <strong>7 anuales</strong>.</p>
                    <div className="text-center text-md-center mt-3 mb-5">
                        <a href={pdfPath + "14F.pdf"} target="_blank" rel="noreferrer" className="btn-custom-primary">Descargar formulario</a>
                    </div>
                    <div className="text-center text-md-center">    
                        <span 
                            data-bs-toggle="modal"
                            data-bs-target="#modal-7"
                            className="btn-custom-secondary"
                            style={{ cursor: 'pointer'}}
                            >
                                Preguntas frecuentes
                        </span>
                        <Modal14F/>
                    </div>
                </div>
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-5 col-lg-3 mb-3">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        > 
                            <Image
                            cloudName="nursingStaff"
                            publicId={LicensesImages.card14H}
                            className="img-fluid img-custom" alt="" />
                    </motion.div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h4 className="fw-bold mt-3">Licencia artículo 14H</h4>
                    <p className="mb-4">Esta licencia se puede tomar dentro del año en curso, aplica un descuento que se refleja en el recibo de sueldo, son <strong>6 anuales</strong>.</p>
                    <div className="text-center text-md-center mt-3 mb-5">
                        <a href={pdfPath + "14H.pdf"} target="_blank" rel="noreferrer" className="btn-custom-primary">Descargar formulario</a>
                    </div>
                    <div className="text-center text-md-center">    
                        <span 
                            data-bs-toggle="modal"
                            data-bs-target="#modal-8"
                            className="btn-custom-secondary"
                            style={{ cursor: 'pointer'}}
                            >
                                Preguntas frecuentes
                        </span>
                        <Modal14H/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LicensesFirstSection;