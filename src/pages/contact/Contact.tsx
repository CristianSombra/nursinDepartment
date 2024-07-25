import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../utils";
import { FormContact } from "../../components";
import ContactImages from "../../assets";
import "../../styles";

const Contact: React.FC<AnimateProps>= ({animate}) => {
    const handleFormSuccess = () => {};

    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            >

            <section className="container container-contact-title position-relative">
                <div className="row my-5 d-flex justify-content-center text-center">
                    <div className="col-12 col-md-10 col-lg-8 my-5">
                        <motion.div 
                            initial={{x: -50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="orange-rectangle-contact"></motion.div>
                        <motion.div 
                            initial={{x: 50, opacity: 0, filter: 'blur(6px)'}}
                            animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="blue-rectangle-contact"></motion.div>
                        <motion.h3 
                            initial={{y: -50, opacity: 0, filter: 'blur(4px)'}}
                            animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.4}}
                            className="fw-bold my-3">
                                Contacto
                        </motion.h3>
                        <motion.p
                            initial={{opacity:0, filter: 'blur(4px)'}}
                            animate={{opacity:1, filter: 'blur(0)'}}
                            transition={{duration: 1.2, delay: 0.6}}
                            >
                                Esta sección está destinada a mantener contacto con la comunidad profesional de enfermería, tanto a nivel individual como institucional. Estamos aquí para escuchar tus consultas, utiliza nuestro <strong>formulario de contacto</strong> o nuestra línea de <strong>WhatsApp Corporativo</strong> para conectarte con nosotros. Esperamos colaborar juntos en la búsqueda de la excelencia en el cuidado de la salud.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="container-contact">
                <div className="row my-5 d-flex justify-content-center mx-auto text-center">
                    <div className="col-12 col-md-9 col-lg-7">
                        <FormContact onSuccess={handleFormSuccess}/>
                    </div>

                    <div className="col-12 mt-5 text-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <h4 className="fw-bold">WhatsApp Corporativo</h4>
                            <div className="col-12 col-md-8 col-lg-5">
                                <p className="my-3">
                                    Esta vía de comunicación está <strong>destinada exclusivamente</strong> a los <strong>enfermeros activos</strong> del <strong>Hospital Regional Río Grande</strong>, por lo que no se responderan mensajes ajenos al plantel activo de la institución.
                                </p>
                                <p className="my-3">
                                    Si eres parte de nuestro equipo y deseas <strong>contactar</strong> al <strong>Departamento de Enfermería</strong> por un tema específico laboral, por favor haz click en contacto. Tu consulta será atendida a la brevedad posible.
                                </p>

                                <div className="d-none d-lg-block">
                                    <a 
                                        href="https://wa.me/5492964613783" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="p-3 btn-custom-primary">Contacto</button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-10 col-lg-5">
                                <img src={ContactImages.whatsApp} className="img-fluid my-3" style={{width: '60%'}} alt="" />
                            </div>
                            <div className="d-lg-none my-3">
                                <a 
                                    href="https://wa.me/5492964613783" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="p-3 btn-custom-primary">Contacto</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </motion.section>
    )
};

export default Contact