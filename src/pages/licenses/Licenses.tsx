import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../utils";
import { TitleLicenses, LicensesFirstSection, LicensesSecondSection } from "../../components";
import "../../styles"

const Licenses: React.FC<AnimateProps>= ({animate}) => {
    return(
        <motion.main
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            role="main"
            >
            
            {/* Sección titulo */}
            <header className="container container-licenses-title position-relative" aria-labelledby="title-licenses">
                <TitleLicenses/>
            </header>

            {/* Sección Licencias 1 */}
            <section className="container" aria-labelledby="licenses-first-section">
                <LicensesFirstSection/>
            </section>

            {/* Sección licencias 2 */}
            <section className="container" aria-labelledby="licenses-second-section">
                <LicensesSecondSection/>
            </section>

        </motion.main>
    )
};

export default Licenses;