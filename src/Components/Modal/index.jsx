import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import DonateBox from '../Donate/DonateBox';
import './style.css';

const popupVariants = {
    hidden: {
    opacity: 0,
    scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.35,
            ease: 'easeInOut'
        }
    }
};

const Modal = (props) => {
    const { isDonateActive, deactivateDonate } = props;
    return (
        <div className="popup-container" onClick={deactivateDonate}>
        <AnimatePresence>
            {isDonateActive && (
            <motion.div className="popup" variants={popupVariants} initial="hidden" animate="visible" exit="hidden"
            onClick={(e) => { e.preventDefault(); e.stopPropagation();}}
            >   
                <DonateBox />
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    )
}

export default Modal