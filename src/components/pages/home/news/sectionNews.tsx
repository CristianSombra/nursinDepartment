import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { FirstSectionNews, SecondSectionNews } from "./sectionsNews";
import "../../../../styles";

const SectionNews: React.FC = () => {
    return(
        <div>
            <div className="row my-5 d-flex justify-content-center">
                <motion.div
                    initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                    animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                    transition={{duration: 1.2, delay: 0.4}}
                    className="col-10 my-3">
                        <h4 className="fw-bold">Novedades</h4>
                </motion.div>
                <div className="col-12 col-md-10">
                    <p>Sección donde compartimos los últimos avances, noticias e información vital para mantener actualizado a nuestra comunidad.</p>
                </div>

                <div className="col-12 col-md-10 col-lg-9 py-3">
                    <p>👉 Dado los inconvenientes respecto al sistema ZIMBRA, los <strong>artículos 14F y 14H</strong> deberán realizarse siguiendo los puntos descriptos a continuación:</p>
                        <ul>
                            <li>Ir a la sección <a href="/licenses"><strong>LICENCIAS</strong></a> dentro de la plataforma.</li>
                            <li>Descargar PDF del artículo que se quiera solicitar.</li>
                            <li>Completar los datos correspondientes, luego imprimir.</li>
                            <li>Firmar y sellar.</li>
                            <li>Entregar al jefe inmediato</li>
                        </ul>
                    <p className="my-4">Si tienes alguna duda respecto a los artículos puedes ver <strong>Preguntas frecuentes</strong> al final de ésta sección.</p>
                </div>


                <div className="col-12 col-md-10 col-lg-9 py-3">
                    <p>👉 En los siguientes videos, podrás ver el paso a paso en la carga de las licencias LAR y LEI:</p>
                    <div className="ratio ratio-16x9">
                        <iframe 
                            src="https://www.youtube.com/embed/Wop7AI_AJP8" 
                            title="Youtube video 1"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="my-4">Si tienes alguna duda respecto a las licencias puedes ver <strong>Preguntas frecuentes</strong> al final de ésta sección.</p>
                </div>

                {/* Suspendido hasta próxima novedad con fotos */}
                
                {/* <div className="col-12 col-md-10 col-lg-8">
                    <FirstSectionNews/>
                </div>
                <div className="col-12 col-md-10 col-lg-8">
                    <SecondSectionNews/>
                </div> */}


            </div>
        </div>
    );
};

export default SectionNews;