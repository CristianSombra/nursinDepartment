import React from "react";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
    return(
        <div>
            <h1>Landing</h1>
            <Link to="/Home">
                <button className="btn btn-outline-dark">Ingresar</button>
            </Link>
        </div>
    )
};

export default Landing;