import React from "react";
import '../../styles';

export const SpinnerLoader: React.FC = () => {
    return(
        <div className="spinner-container">
            <img src="./sp.svg" alt="Spinner" className="spinner mb-3"/>
        </div>
    );
}
