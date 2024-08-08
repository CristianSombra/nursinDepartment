import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const DownloadFiles: React.FC = () => {
    const basePath = '/';
    const pdfPath = basePath + "licences/";

    return(
        <section>
            <div className="row mt-4 justify-content-center ">
                <div className="text-center">
                    <h4 className="fw-bold my-3" >Descargables de estudio</h4>
                    <p className="my-3">En la siguiente tabla podrás acceder a bibliografía de utilidad en formato PDF.</p>
                </div>
                <div className="col-12 col-md-8 my-3">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-lg table-custom-updates">
                            <caption className="text-center">Material de estudio</caption>
                            <thead>
                                <tr className="table-dark text-center">
                                    <th>Materiales de estudio</th>
                                    <th>Archivo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Últimas bases de RCP</th>
                                    <th className="text-center">
                                        <motion.div 
                                            initial={{y: 0}}
                                            whileHover={{y: -10}}
                                            transition={{duration: 0.2, delay: 0.1}}>
                                                <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer" aria-label="Descargar archivo PDF de Últimas bases de RCP">
                                                    <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                </a>
                                        </motion.div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>El mobbing y el ambiente laboral</th>
                                    <th className="text-center">
                                        <motion.div 
                                            initial={{y: 0}}
                                            whileHover={{y: -10}}
                                            transition={{duration: 0.2, delay: 0.1}}>
                                                <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer" aria-label="Descargar archivo PDF de el mobbing y el ambiente laboral">
                                                    <FontAwesomeIcon icon={faFilePdf} className="fs-4" />
                                                </a>
                                        </motion.div>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Últimas actualizaciones en emergencias</th>
                                    <th className="text-center">
                                        <motion.div 
                                            initial={{y: 0}}
                                            whileHover={{y: -10}}
                                            transition={{duration: 0.2, delay: 0.1}}>
                                                <a href={pdfPath + "licencia.pdf"} target="_blank" rel="noreferrer" aria-label="Descargar archivo PDF de Últimas actualizaciones en emergencias">
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
        </section>
    )
}

export default DownloadFiles;