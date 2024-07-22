import React from "react";
import { motion } from "framer-motion";
import { FirstSectionNews, SecondSectionNews } from "./sectionsNews";
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
                    <p>Bienvenidos a nuestra sección de novedades, donde compartimos los últimos avances y noticias en el campo de la enfermería, ofreciendo también recursos valiosos para apoyar a nuestra práctica profesional y crecimiento continuo.</p>
                </div>
                <div className="col-12 col-md-10 col-lg-8">
                    <FirstSectionNews/>
                </div>
                <div className="col-12 col-md-10 col-lg-8">
                    <SecondSectionNews/>
                </div>
            </div>
        </div>
    );
};

export default SectionNews;