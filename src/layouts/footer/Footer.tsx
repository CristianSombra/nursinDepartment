import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../../styles';

const Footer: React.FC = () => {
    return(
        <footer>
            <div className="container">
            <div className="row d-flex justify-content-center text-center">
                            <div className="col-auto">
                                <a 
                                    href="https://www.instagram.com/hospitalregionalriogrande/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                >
                                    <div>
                                        <FontAwesomeIcon icon={faInstagram} className="icon-custom icon-instagram" />
                                    </div>
                                </a>   
                            </div>
                            <div className="col-auto">
                                <a
                                    href="https://www.facebook.com/RedDeSaludRG"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                >
                                <div>
                                    <FontAwesomeIcon icon={faFacebookF} className="icon-custom icon-facebook" />
                                </div>
                                </a>   
                            </div>
                            <div className="col-auto">
                                <a 
                                    href="https://www.tierradelfuego.gob.ar/blog/2016/10/02/hospital-regional-rio-grande/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="red-social"
                                >
                                <div>
                                    <FontAwesomeIcon icon={faGlobe} className="icon-custom icon-web" />
                                </div>
                                </a>
                            </div>
                        </div>
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-12 col-md-4 my-2">
                        <figcaption style={{fontWeight: 'bold'}}>Departamento de Enfermería HRRG 2024</figcaption>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;