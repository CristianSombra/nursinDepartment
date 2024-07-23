import React from "react";
import { motion } from "framer-motion";

const TitleUpdates: React.FC = () => {
    return(
        <div>
            <div className="row my-3 d-flex justify-content-center text-center d-none d-md-flex">
                <div className="col">
                    <motion.h3 
                        initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                        animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="fw-bold my-3">
                            Formación continua
                        </motion.h3>
                <motion.p 
                        initial={{opacity:0, filter: 'blur(4px)'}}
                        animate={{opacity:1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.6}}
                    >
                        En esta sección podrás visualizar todas las <strong>capacitaciones disponibles</strong> para planificarte con anticipación y formar parte de la formación continua. Trabajamos en conjunto con la <strong>Oficina de División de Docencia e Investigación</strong> para asegurar que tengas acceso a una amplia variedad de oportunidades de aprendizaje, para contribuir de manera significativa a tu desarrollo profesional, asegurando que aproveches al máximo las oportunidades de aprendizaje disponibles.
                    </motion.p>    
                </div>
                    <motion.p 
                        initial={{opacity:0, filter: 'blur(4px)'}}
                        animate={{opacity:1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.6}}
                    >
                        Para contactarse con la <strong>Oficina de División de Docencia e Investigación</strong> realizarlo a través de <strong style={{ fontStyle: 'italic' }} >ddocenciamsrg@tierradelfuego.gob.ar</strong>.
                    </motion.p>
            </div>
        </div>
    );
};


const TitleUpdatesMobile: React.FC = () => {
    return(
        <div>
            <div className="row my-5 d-flex justify-content-center text-center d-md-none">
                <div className="col-12 my-5">
                    <motion.h3 
                        initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                        animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="fw-bold my-3">
                            Formación continua
                        </motion.h3>
                    <motion.p 
                        initial={{opacity:0, filter: 'blur(4px)'}}
                        animate={{opacity:1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.6}}
                    >
                        En esta sección podrás visualizar todas las <strong>capacitaciones disponibles</strong> para planificarte con anticipación y formar parte de la formación continua. Trabajamos en conjunto con la <strong>Oficina de División de Docencia e Investigación</strong> para asegurar que tengas acceso a una amplia variedad de oportunidades de aprendizaje, para contribuir de manera significativa a tu desarrollo profesional, asegurando que aproveches al máximo las oportunidades de aprendizaje disponibles.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export {
    TitleUpdates,
    TitleUpdatesMobile
}