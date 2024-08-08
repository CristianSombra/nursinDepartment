import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../utils";
import { BannerUpdates, TitleUpdates, BannerUpdatesMobile, TitleUpdatesMobile, UpdatesSections, DownloadFiles } from "../../components";
import "../../styles"

const Updates: React.FC<AnimateProps>= ({animate}) => {
    return(
        <motion.main
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            
            {/* Sección Banner Updates */}
            <header className="container">
                <BannerUpdates/>
            </header>

            {/* Sección Título */}
            <section className="container">
                <TitleUpdates/>
            </section>

            {/* Sección Título mobile */}
            <section className="container-fluid container-updates-title">
                <TitleUpdatesMobile/>
            </section>

            {/* Sección Banner mobile */}
            <section className="container">
                <BannerUpdatesMobile/>
            </section>

            {/* Sección Capacitaciones */}
            <div className="container">
                <UpdatesSections/>
            </div>

            {/* Sección Materiales de utilidad */}
            <section className="container">
                <DownloadFiles/>
            </section>

        </motion.main>
    )
};

export default Updates;