import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Navbar, Footer } from "../layouts";
import { ScrollTop } from "../components";
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
    const showFooter = location.pathname !== "/";
    const [landingRef, landingInView] = useInView({ threshold: 0.10 });
    const [homeRef, homeInView] = useInView({ threshold: 0.10 });
    const [updatesRef, updatesInView] = useInView({ threshold: 0.25 });
    const [licensesRef, licencesInView] = useInView({ threshold: 0.25 });
    const [contactRef, contacInView] = useInView({ threshold: 0.25 });

    return(
        <>
            {showNav && <Navbar/>}
            <ScrollTop/>
            <Routes>
                <Route path="/" element={<div ref={landingRef}><Landing animate={landingInView} /></div>} />
                <Route path="/Home" element={<div ref={homeRef}><Home animate={homeInView} /></div>} />
                <Route path="/Updates" element={<div ref={updatesRef}><Updates animate={updatesInView} /></div>} />
                <Route path="/Licenses" element={<div ref={licensesRef}><Licenses animate={licencesInView} /></div>} />
                <Route path="/Contact" element={<div ref={contactRef}><Contact animate={contacInView} /></div>} />
            </Routes>
            {showFooter && <Footer/>}
        </>
    );
}

export default AppRouter;
