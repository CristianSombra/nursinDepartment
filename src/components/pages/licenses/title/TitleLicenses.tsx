import React from "react";
import { motion } from "framer-motion";

const TitleLicenses: React.FC = () => {
    return(
        <section>
            <div className="row my-5 d-flex justify-content-center text-center title-licenses">
                <div className="col-12 col-md-10 col-lg-8 my-5">
                    <motion.div 
                        initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="orange-rectangle-licenses"></motion.div>
                    <motion.div 
                        initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="blue-rectangle-licenses"></motion.div>
                    <motion.h1 
                        initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                        animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="fw-bold my-3">
                            Licencias
                    </motion.h1>
                    <motion.p
                        initial={{opacity:0, filter: 'blur(4px)'}}
                        animate={{opacity:1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.6}}
                        >
                            En esta sección puedes visualizar los diferentes <strong>tipos de licencias</strong> existentes, con su <strong>información relevante</strong> y los <strong>archivos descargables</strong>. Recuerda que es bueno que organices con tus compañeros de turno para la correcta planificación del personal. Si tienes dudas sobre algo puedes ir a la sección de preguntas frecuentes.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default TitleLicenses;