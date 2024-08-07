import React from "react";
import { motion } from "framer-motion";
import { Image } from "cloudinary-react";
import HomeImages from "../../../../assets";
import "../../../../styles";

const sentence = "Ser Enfermero es más que un oficio, es una fusión de Ciencia, Corazón, Fortaleza y Humanidad.";

const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.04 
        }
    }
};

const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};


const BannerHome: React.FC = React.memo(() => {

    const letters = sentence.split("");

    return(
        <main>
            <section className="row my-5 d-flex justify-content-center position-relative d-none d-md-flex">
                <div className="col">
                    <motion.div 
                        initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="orange-rectangle-home"
                        aria-hidden="true"
                        ></motion.div>
                    <motion.div 
                        initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="blue-rectangle-home"
                        aria-hidden="true"
                        ></motion.div>
                    <div className="image-container">
                            <Image cloudName="nursingStaff" publicId={HomeImages.bannerHome} className="img-fluid col-12" alt="Banner de Departamento de Enfermería" />
                            <div className="image-overlay" aria-hidden="true"></div>
                    </div>
                    <div className="text-overlay">
                            <motion.h1 
                                initial={{y: 50, opacity: 0, filter: 'blur(6px)'}}
                                animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.2, delay: 0.4}}
                                >
                                    Departamento de Enfermería
                                </motion.h1>
                            <motion.h2 
                                initial={{y: 50, opacity: 0, filter: 'blur(6px)'}}
                                animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.4, delay: 0.6}}
                                >
                                    Rio Grande, Tierra del Fuego
                                </motion.h2>
                    </div>
                </div>
            </section>
            {/* Sección Banner Mobile */}
            <div className="row mt-5 mb-4 d-flex justify-content-center text-center d-md-none ">
                <div className="col mt-3 titles-mobile">
                    <motion.h3
                        initial={{y: -50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}} 
                        >
                            Departamento de Enfermería
                    </motion.h3>
                    <motion.h4
                        initial={{y: -50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.4, delay: 0.6}} 
                        >
                            Rio Grande, Tierra del Fuego
                    </motion.h4>
                    <div className="image-container mt-4">
                        <Image cloudName="nursingStaff" publicId={HomeImages.bannerHomeMobile} className="img-fluid" alt="Banner móvil de Departamento de Enfermería" />
                        <div className="image-overlay" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
            <div className="row my-3 d-flex justify-content-center text-center">
                <p className="fst-italic">
                    <motion.span variants={sentenceVariants} initial="hidden" animate="visible">
                        {letters.map((letter, index) => (
                            <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                        ))}
                    </motion.span>
                </p>
            </div>
        </main>
    )
})

export default BannerHome;