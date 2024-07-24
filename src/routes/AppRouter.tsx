import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Navbar, Footer } from "../layouts";
import { ScrollTop } from "../components";
import { ToastContainer } from "react-toastify";
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
    const [landingRef, landingInView] = useInView({ triggerOnce: true, rootMargin: "0px 0px -50px 0px"});
    const [homeRef, homeInView] = useInView({ triggerOnce: true, rootMargin: "0px 0px -50px 0px" });
    const [updatesRef, updatesInView] = useInView({ triggerOnce: true, rootMargin: "0px 0px -50px 0px" });
    const [licensesRef, licencesInView] = useInView({ triggerOnce: true, rootMargin: "0px 0px -50px 0px" });
    const [contactRef, contacInView] = useInView({ triggerOnce: true, rootMargin: "0px 0px -50px 0px" });

    return(
        <>
            {showNav && <Navbar/>}
            <ScrollTop/>
            <ToastContainer/>
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
