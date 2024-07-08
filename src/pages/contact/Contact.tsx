import React from "react";
import { motion } from "framer-motion";
import { AnimateProps } from "../../components";

const Contact: React.FC<AnimateProps>= ({animate}) => {
    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h1>Contacto</h1>
        </motion.section>
    )
};

export default Contact