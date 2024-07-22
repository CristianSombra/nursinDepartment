import React from "react";
import { motion } from "framer-motion";
import FrequentQuestions from "./frequentQuestions";

const SectionFrequentQuestions: React.FC = () => {
    return(
        <div>
            <div className="row my-5 d-flex justify-content-center">
                <motion.div 
                    initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                    animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                    transition={{duration: 1.2, delay: 0.4}}
                    className="col-10 my-3">
                        <h4 className="fw-bold">Preguntas frecuentes</h4>
                </motion.div>
                <div className="col-12 col-md-10">
                    <p
                        style={{textAlign: 'justify'}}
                        >
                        Bienvenido a nuestra sección de Preguntas Frecuentes, desarrollado junto a la oficina de <strong>Recursos Humanos</strong>. Aquí encontrarás respuestas a las consultas más comunes. Nuestro objetivo es proporcionarte toda la información necesaria para una mejor experiencia al momento de tener que realizar alguna acción. Si no encuentras la respuesta que buscas, no dudes en ponerte en contacto con nosotros enviándonos un mensaje en la <strong>sección de contacto</strong>.
                    </p>
                </div>
                <div id="frequentquestions" className="col-12 col-md-10 col-lg-10 mx-auto">
                    <FrequentQuestions/>
                </div>
            </div>
        </div>
    );
};

export default SectionFrequentQuestions;