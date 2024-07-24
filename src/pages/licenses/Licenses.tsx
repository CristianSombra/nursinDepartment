import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../utils";
import { TitleLicenses, LicensesFirstSection, LicensesSecondSection } from "../../components";
import "../../styles"

const Licenses: React.FC<AnimateProps>= ({animate}) => {
    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            
            {/* Sección titulo */}
            <section className="container container-licenses-title position-relative">
                <TitleLicenses/>
            </section>

            {/* Sección Licencias 1 */}
            <section className="container">
                <LicensesFirstSection/>
            </section>

            {/* Sección licencias 2 */}
            <section className="container">
                <LicensesSecondSection/>
            </section>

        </motion.section>
    )
};

export default Licenses;