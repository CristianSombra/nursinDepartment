import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import { FormContactProps } from "../../../../utils";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const FormContact: React.FC<FormContactProps>= ({ onSuccess }) => {
    
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
                onSuccess();
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
    
    return (
        <form className="" onSubmit={sendEmail} ref={form}>
        <div className="row">
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
            </div>
            <div className="col text-center text-md-end">
                <button 
                    type="submit" 
                    className="p-3 btn-custom-primary"
                    id="button" 
                    value="Send Email"
                    > 
                    Enviar 
                </button>
            </div>
    </form>
    );
}

export default FormContact;