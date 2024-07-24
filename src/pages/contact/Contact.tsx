import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { AnimateProps } from "../../utils";
import imgWhatsApp from "../../assets/whatsappcorporative.jpg";
import "../../styles";

const Contact: React.FC<AnimateProps>= ({animate}) => {

    const [formControl, setFormControl] = useState({
        from_name: "",
        email: "",
        message: "",
    });

    const serviceID = 'default_service';
    const templateID = 'template_j8y46ha';
    const form = useRef<HTMLFormElement | null>(null);
    
    
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
    
        // Validación el campo Email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formControl.email)) {
          // Mensaje de error si el correo electrónico no es válido
        toast.error("Por favor, introduce una dirección de correo electrónico válida.");
          return; // Detiene el envío del formulario si el correo electrónico no es válido
        }
    
        if(form.current) {
            emailjs
            .sendForm(serviceID, templateID, form.current, "EKxeOba6KbWeMq6Rg") // Completar datos
            .then((result) => {
                console.log(result.text);
                resetForm();
                toast.success("!Tu Mensaje fue enviado con éxito!");
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje", error);
                toast.error("Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente más tarde.");
            });
        }
    };
    
    const resetForm = () => {
        setFormControl({
            from_name: "",
            email: "",
            message: "",
        });
    };
    
    const handleChage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
    
        let isValid = true;
        let errorMessage = "";
    
        // Validación el campo Nombre y Apellido
        if (name === "from_name") {
            if (/[^a-zA-Z\s]/.test(value) || value.length > 20) {
                isValid = false;
                errorMessage =
                    "El campo Nombre solo acepta letras y espacios, con un máximo de 20 caracteres.";
            }
        }

        // Validación el campo Mensaje
        if (name === "message") {
            if (value.length > 300) {
                isValid = false;
                errorMessage = "El campo Mensaje solo puede tener un máximo de 300 caracteres.";
            }
        }
    
        if (isValid) {
            // Actualizar el estado del formulario solo si la entrada es válida
            setFormControl({
                ...formControl,
                [name]: value,
            });
        } else {
            // Mostrar mensaje de error
            toast.error(errorMessage);
        }
    };


    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container"
            >

            <section className="container-fluid container-contact-title position-relative">
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
                        <form className="" onSubmit={sendEmail} ref={form}>
                            <motion.div 
                                className="row"
                                initial={{x: -50, opacity: 0, filter: 'blur(5px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.6, delay: 0.6}}
                                >
                                <h4 className="fw-bold">Escríbenos</h4>
                                <p className="my-3">
                                    Este formulario de contacto está disponible para todos los <strong>profesionales enfermeros</strong> e <strong>instituciones</strong> interesadas en comunicarse con el <strong>Departamento de Enfermería del Hospital Regional Río Grande</strong>. Nos complace atender cualquier consulta relacionados con temas laborales o cualquier otra inquietud relevante para nuestra práctica profesional. Por favor, <strong>completa el formulario</strong> a continuación y te responderemos a la brevedad posible. Apreciamos tu interés en comunicarte con nosotros.
                                </p>

                                <div className="col-12 col-md-12 col-lg-6 mt-5 position-relative">
                                    <input 
                                        type="text" 
                                        className="custom-input" 
                                        placeholder=" " 
                                        value={formControl.from_name}
                                        onChange={handleChage}
                                        name="from_name"
                                        id="from_name"
                                        required
                                        />
                                    <label htmlFor="nombre" className="custom-label fs-5 ms-2">Nombre</label>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 mt-5  position-relative">
                                    <input 
                                        type="text" 
                                        className="custom-input" 
                                        placeholder=" " 
                                        name="email"
                                        id="email"
                                        value={formControl.email}
                                        onChange={handleChage}
                                        required
                                        />
                                    <label htmlFor="email" className="fs-5 ms-2 custom-label">Email</label>
                                </div>
                                <div className="col-12 my-3 position-relative">
                                    <textarea 
                                        className="custom-input custom-area"
                                        placeholder=" " 
                                        name="message"
                                        id="message"
                                        cols={30}
                                        rows={10}
                                        value={formControl.message}
                                        onChange={handleChage}
                                        required
                                        >
                                            
                                        </textarea>
                                        <label htmlFor="mensaje" className="custom-label fs-5 ms-2">Mensaje</label>
                                </div>
                                </motion.div>
                                <motion.div 
                                    className="col text-center text-md-end"
                                    initial={{y: 50, opacity: 0, filter: 'blur(5px)'}}
                                    animate={{y: 0, opacity: 1, filter: 'blur(0)'}}
                                    transition={{duration: 1.8, delay: 0.8}}
                                    >
                                    <button 
                                        type="submit" 
                                        className="p-3 btn-custom-primary"
                                        id="button" 
                                        value="Send Email"
                                        > 
                                        Enviar 
                                    </button>
                                </motion.div>
                        </form>
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
                            <motion.div
                                initial={{x: 50, opacity: 0, filter: 'blur(5px)'}}
                                animate={{x: 0, opacity: 1, filter: 'blur(0)'}}
                                transition={{duration: 1.6, delay: 0.6}}
                                className="col-12 col-md-10 col-lg-5"
                                >
                                <img src={imgWhatsApp} className="img-fluid my-3" style={{width: '60%'}} alt="" />
                            </motion.div>
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