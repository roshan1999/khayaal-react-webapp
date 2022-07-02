import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import './TeamSlider.css';
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from 'react-responsive';
import ForwardIcon from '../../../../assets/icon_forward.svg';
import BackwardIcon from '../../../../assets/icon_backward.svg';

const TeamSlider = (props) => {
    function handleSwipe(dir) {
        if (dir === 'Left') {
            if (position < props.slides.length - 2) {
                positionSet(position + 1);
            }
            else {
                positionSet(-1);
            }
        }
        else if (dir === 'Right') {
            if (position > -1) {
                positionSet(position - 1);
            }
            else {
                positionSet(0);
            }
        }
    }

    const isMobileScreen = useMediaQuery({ query: '(max-width: 768px)' })
    const [position, positionSet] = React.useState(0);
    const [flag, setFlag] = React.useState(false);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('Left'),
        onSwipedRight: () => handleSwipe('Right')
    });

    return (
        <div className="team-slider-parent-container">
            <img
                className="icon"
                src={BackwardIcon}
                alt="backward_icon"
                onClick={() => handleSwipe("Right")} />
            <div
                {...swipeHandlers}
                className="team-slider-container">
                <motion.div className="image-row">
                    {props.slides.map((member, index) => (
                        <motion.div className="image-slider-container"
                            key={index}
                            initial={{ scale: 0, rotation: -180 }}
                            animate={{
                                rotate: 0,
                                top: index !== (position + 1) ?
                                    (!isMobileScreen ? '2vw' : '7vw')
                                    : (!isMobileScreen ? '0vw' : '0vw'),
                                left: isMobileScreen ?
                                    `${(index - position) * 45 - 70}vw` :
                                    (index !== (position + 1) ? `${(index - position) * 23 - 34}vw` :
                                        `${(index - position) * 23 - 34}vw`),
                                scale: index === (position + 1) ? 1 : 0.8
                            }}
                            transition={{
                                type: "spring",
                                stiffness: "260",
                                damping: "20"
                            }}>
                            <img
                                src={member.image}
                                alt={"member" + index}
                                style={index === (position + 1) ?
                                    { borderColor: "var(--primary-border-color)" } :
                                    { borderColor: "var(--secondary-border-color)" }} />
                            <p
                                style={index === (position + 1) ?
                                    (!isMobileScreen ?
                                        { color: "var(--primary-text-color)", fontSize: "2vw", margin: '1rem' } :
                                        { color: "var(--primary-text-color)", fontSize: "3.5vw", margin: 0 }) :
                                    (!isMobileScreen ?
                                        { color: "var(--primary-dim-color)", margin: '1rem', fontSize: "1.8vw" } :
                                        { color: "var(--primary-dim-color)", margin: 0, fontSize: "3.5vw" })
                                }>
                                {member.name}
                            </p>
                            <p
                                style={index !== (position + 1) ?
                                    (!isMobileScreen ?
                                        { color: "var(--primary-dim-color)", fontSize: "1.3vw", margin: "0.6vw 0", 'fontWeight': 'normal' } :
                                        { color: "var(--primary-dim-color)", fontSize: "3vw", margin: "2vw 0", 'fontWeight': 'normal' }
                                    ) :
                                    (!isMobileScreen ?
                                        { fontSize: "1.5vw", margin: "0.6vw 0", 'fontWeight': 'normal' } :
                                        { fontSize: "3vw", margin: "0.6vw 0", 'fontWeight': 'normal' }
                                    )}>
                                {member.position}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <img
                className="icon"
                src={ForwardIcon}
                alt="forward_icon"
                onClick={() => handleSwipe("Left")} />
        </div>
    );
};

export default TeamSlider;