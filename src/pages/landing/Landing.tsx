import React from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";
import index from "../../assets";
import "../../styles";

const sentence = "Si salvas una vida eres un héroe, pero si salvas 100 eres un enfermero";

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

const Landing: React.FC<AnimateProps> = ({animate}) => {
    return(
        <motion.section 
            className="container vh-100 d-flex justify-content-center align-items-center"
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            <div className="row">
                <div className="col-12 text-center">
                        <Image cloudName="nursingstaff" publicId={index.logoLanding} className="img-fluid logo-landing" alt="Logo" />
                        <div className="mt-3 mb-4">
                            <div className="mb-3">
                                <Link to="/home">
                                    <button className="btn-custom-primary" >Inicio</button>
                                </Link>
                            </div>
                            <div className="mb-3">
                                <Link to="/updates">
                                    <button className="btn-custom-primary" >Capacitación</button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/licenses">
                                    <button className="btn-custom-primary" >Licencias</button>
                                </Link>
                            </div>
                        </div>
                        <Image cloudName="nursingstaff" publicId={index.titleLanding} className="img-fluid title-landing"  alt="Logo" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="fst-italic text-landing mt-1">
                            <motion.span variants={sentenceVariants} initial="hidden" animate="visible">
                                {sentence.split("").map((letter, index) => (
                                    <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                                ))}
                            </motion.span>
                        </p>
                    </div>
            </div>
        </motion.section>
    )
};

export default Landing;