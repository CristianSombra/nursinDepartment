import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../utils";
import { BannerUpdates, TitleUpdates, BannerUpdatesMobile, TitleUpdatesMobile, UpdatesSections } from "../../components";
import "../../styles"

const Updates: React.FC<AnimateProps>= ({animate}) => {
    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            
            {/* Sección Banner Updates */}
            <section className="container">
                <BannerUpdates/>
            </section>

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

        </motion.section>
    )
};

export default Updates;