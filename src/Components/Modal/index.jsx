import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import './style.css';
import displayRazorpay from '../../hooks/displayRazorpay';

const backdrop = {
    "hidden": { "opacity": 0 },
    "visible": { "opacity": 1 }
}

const modal = {
    "hidden": { "opacity": 0, "y": "-100vh" },
    "visible": { "opacity": 1, "y": "300px", transition: { delay: 0.5 } }
}

var value = 10;

const Modal = (props) => {
    return (
        <AnimatePresence exitBeforeEnter >
            {props.isActive && (
                <motion.div className="donate-backdrop" onClick={props.deactivateDonate}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="donate-modal"
                        variants={modal}
                    >
                        <p> Your contribution is helping million other lives </p>
                        <button onClick={props.deactivateDonate}>Cancel</button>
                        <button onClick={() => {
                            
                            // TODO: Temporary code to remove default amount
                            value = parseInt(prompt("Enter an amount"));
                            if (!value) {
                                alert("Invalid amount");
                            }
                            else {
                                displayRazorpay(value);
                            }
                        }}>Donate</button>
                    </motion.div>
                </motion.div>)
            }
        </AnimatePresence >
    )
}

export default Modal