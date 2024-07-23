import React from "react";
import { motion } from "framer-motion";
import { Image } from "cloudinary-react";
import UpdatesImages from "../../../../assets";


const sentence = "El aprendizaje es experiencia. Todo lo demás es información.";

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.4,
            staggerChildren: 0.03
        }
    }
};

const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};




const BannerUpdates: React.FC = () => {
    return(
        <div>
            <div className="row my-5 d-flex justify-content-center position-relative d-none d-md-flex">
                <div className="col">
                    <motion.div 
                        initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="orange-rectangle-updates"></motion.div>
                    <motion.div 
                        initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.4}}
                        className="blue-rectangle-updates"></motion.div>
                    <div className="image-container-updates">
                        <Image cloudName="nursingStaff" publicId={UpdatesImages.bannerUpdates} className="img-fluid col-12" alt="" />
                        <div className="blue-rectangle-updates-over">
                            <div className="text-container">
                                <motion.p
                                    className="banner-updates-text"
                                    variants={textContainerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    >
                                    {['"'].concat(sentence.split(""), '"').map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                        ))}
                                </motion.p>
                                <motion.p
                                    className="banner-updates-author"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 1.8 }}
                                >
                                    - Albert Einstein
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BannerUpdatesMobile: React.FC = () => {
    return(
        <div>
            <div className="row d-flex justify-content-center text-center d-md-none">
                <div className="col">
                    <motion.div 
                        initial={{x: 50, opacity: 0, filter: 'blur(5px)'}}
                        animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                        transition={{duration: 1.6, delay: 0.6}}
                        className="image-container">
                            <Image cloudName="nurginStaff" publicId={UpdatesImages.bannerUpdatesMobile} className="img-fluid" alt="" />
                            <div className="image-overlay"></div>
                    </motion.div>
                </div>
                <div className="col-12 mt-4">
                    <motion.p
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        {['"'].concat(sentence.split(""), '"').map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                        ))}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.8 }}
                        style={{ fontStyle: 'italic' }}
                    >
                        - Albert Einstein
                    </motion.p>
                </div>
                <motion.p 
                        initial={{opacity:0, filter: 'blur(4px)'}}
                        animate={{opacity:1, filter: 'blur(0)'}}
                        transition={{duration: 1.2, delay: 0.6}}
                        className="mt-3"
                        >
                            Para contactarse con la <strong>Oficina de División de Docencia e Investigación</strong> realizarlo a través de <strong style={{ fontStyle: 'italic' }} >ddocenciamsrg@tierradelfuego.gob.ar</strong>.
                </motion.p>
            </div>
        </div>
    )
}

export {
    BannerUpdates,
    BannerUpdatesMobile
}