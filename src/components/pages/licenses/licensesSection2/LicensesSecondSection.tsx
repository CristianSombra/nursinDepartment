import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const LicensesSecondSection: React.FC = () => {

    const basePath = '/';
    const pdfPath = basePath + "licences/";

    return(
        <div>
            <div className="row mt-5 justify-content-center ">
                <div className="text-center col-12 col-md-10">
                    <h4 className="fw-bold my-3">Otras licencias descargables</h4>
                    <p className="my-3">En la siguiente tabla podrás acceder a otras licencias o documentos para descargar en formato PDF, para completar y enviar por <strong>GEN</strong> o <strong>ZIMBRA</strong> según corresponda.</p>
                </div>
                <div className="col-12 col-md-10 col-lg-8 my-3">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-lg table-custom-licenses">
                            <caption className="text-center">Lista de licencias</caption>
                            <thead>
                                <tr className="table-dark text-center">
                                    <th>Licencias</th>
                                    <th>Archivo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Formulario de permiso de salida</th>
                                    <th className="text-center">
                                        <motion.div 
                                            initial={{y: 0}}
                                            whileHover={{y: -10}}
                                            transition={{duration: 0.2, delay: 0.1}}>
                                                <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                </a>
                                        </motion.div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Formulario de cambio de turno</th>
                                    <th className="text-center">
                                        <motion.div 
                                            initial={{y: 0}}
                                            whileHover={{y: -10}}
                                            transition={{duration: 0.2, delay: 0.1}}>
                                                <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                </a>
                                        </motion.div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>LEI decreto 2024</th>
                                    <th className="text-center">
                                        <motion.div 
                                            initial={{y: 0}}
                                            whileHover={{y: -10}}
                                            transition={{duration: 0.2, delay: 0.1}}>
                                                <a href={pdfPath + "LEI-decreto24.pdf"} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                </a>
                                        </motion.div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LicensesSecondSection;