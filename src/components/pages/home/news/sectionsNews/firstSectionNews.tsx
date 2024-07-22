import React from "react";
import { Image } from "cloudinary-react";
import HomeImages from '../../../../../assets';
import { ModalFirstSection } from "./modalsNews/index";


const FirstSectionNews: React.FC = () => {
    return(
        <div>
            <Image cloudName="nursingStaff" publicId={HomeImages.card1} className="img-fluid img-custom-home my-3" alt="" />
            <h5 className="fw-bold text-center text-md-start">Primera Expo Enfermería 2024</h5>
            <p className="text-center text-md-start">Durante la primera semana de mayo se realizó charlas de diferentes temas.</p>
            <div className="d-flex justify-content-center justify-content-md-end mb-4">
                <button 
                    className="btn-custom-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-1"
                    >
                        Ver más
                </button>
            </div>
            <ModalFirstSection/>
        </div>
    )
}

export default FirstSectionNews;