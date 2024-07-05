import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "../layouts";
import { 
    Landing,
    Home,
    Updates,
    Licenses,
    Contact
} from "../pages";

const AppRouter: React.FC = () => {
    const location = useLocation();
    const showNav = location.pathname !== "/";
    return(
        <>
            {showNav && <Navbar/>}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Updates" element={<Updates />} />
                <Route path="/Licenses" element={<Licenses />} />
                <Route path="/Contact" element={<Contact />}/>
            </Routes>

        </>
    );
}

export default AppRouter;
