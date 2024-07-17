import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../utils";
import { BannerHome, CarouselHome } from "../../components";

const Home: React.FC<AnimateProps>= ({animate}) => {
    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="container-fluid"
            >
            
            {/* Sección Banner Home */}
            <section className="container container-banner">
                <BannerHome/>
            </section>

            {/* Sección Anuncios próximos */}
            <section className="container">
                <CarouselHome/>
            </section>

        </motion.section>
    )
};

export default Home