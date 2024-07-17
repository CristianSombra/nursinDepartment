import React from "react";
import { motion } from "framer-motion";
import { CarouselNews } from "./CarouselNews";
import { ModalInformationA } from "../../modalInformation/ModalInformation";
// import { handleButtonClick } from "../formInscription/formInscription";


const CarouselHome: React.FC = () => {
    return(
        <div>
                <div className="row my-5 d-flex justity-content-center text-center">
                <motion.div
                    initial={{opacity:0, filter: 'blur(4px)'}}
                    animate={{opacity:1, filter: 'blur(0)'}}
                    transition={{duration:1.2, delay:0.6}}
                    >
                        <h5 className="fw-bold">Próximas capacitaciones</h5>
                        <h5 className="text-muted">Junio 2024</h5>
                </motion.div>
                
                <div className="col-12 col-md-10 col-lg-8 my-3 mx-auto">
                    <CarouselNews/>
                </div>
                <div className="col-12">
                    {/* <button 
                        className="btn-custom"
                        onClick={handleButtonClick}
                        >
                        Inscribirme
                    </button> */}
                    <button 
                        className="btn-custom-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-4"
                        >
                        Inscribirme
                    </button>
                    <ModalInformationA/>
                </div>
            </div>
        </div>
    )
};

export default CarouselHome;