import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./LegalDocModal.css";
import * as Legal from "./Data";

const TermsList = [ 
    {"id": 1, "title": "Terms And Conditions", "content": Legal.Section_Terms},
    {"id": 2, "title": "Use of Website", "content": Legal.Section_UseOfWebsite}, 
    // {"id": 3, "title": "Privacy Plicy", "content": Legal.Section_Privacy}, 
    {"id": 4, "title": "Accuracy, Completeness and Timeliness of information on Website", "content": Legal.Section_Accuracy},
    {"id": 5, "title": "Use of Materials from website", "content": Legal.Section_MaterialUse}, 
    {"id": 6, "title": "Disclaimers", "content": Legal.Section_Disclaimers}, 
    {"id": 7, "title": "Limitation of Liability", "content": Legal.Section_Limitations}, 
    {"id": 8, "title": "Indemnification", "content": Legal.Section_Idemnification}, 
    {"id": 9, "title": "Featured Links", "content": Legal.Section_FeaturedLinks}, 
    {"id": 10, "title": "Linking", "content": Legal.Section_Linking}, 
    {"id": 11, "title": "Copyright", "content": Legal.Section_Copyright}, 
    {"id": 12, "title": "Termination of Privileges", "content": Legal.Section_TerminationPrivileges},
    {"id": 13, "title": "Jurisdiction", "content": Legal.Section_Jurisdiction}, 
    {"id": 14, "title": "Miscellaneous", "content": Legal.Section_Miscellaneous}, 
    {"id": 15, "title": "How to Contact us", "content": Legal.Section_Contact}, 
    {"id": 16, "title": "Registration, Transactions, Term of Registration", "content": Legal.Section_RegistrationTerms},
    {"id": 17, "title": "Notices", "content": Legal.Section_Notices}, 
    {"id": 18, "title": "Representations, Convenants and Warranties", "content": Legal.Section_Representations}, 
    {"id": 19, "title": "Compliance", "content": Legal.Section_Compliance}, 
    {"id": 20, "title": "Contractors", "content": Legal.Section_Contractors},
    {"id": 21, "title": "Intellectual property rights, Restriction on Use", "content": Legal.Section_RestrictedSitesOwner}
]

const PrivacyList = [ 
    {"id": 1, "title": "Privacy Notice/Policy", "content": Legal.Section_PrivacyNotice},
    {"id": 2, "title": "Suspension, Termination", "content": Legal.Section_Suspension}, 
    {"id": 3, "title": "Disclaimer", "content": Legal.Section_P_Disclaimer}, 
    {"id": 4, "title": "Limitation of Liability", "content": Legal.Section_P_LimitationsOfLiability},
    {"id": 5, "title": "Remedies, Claims", "content": Legal.Section_Remedies}, 
    {"id": 6, "title": "Indemnities", "content": Legal.Section_P_Indemnities}, 
    {"id": 7, "title": "Dispute Resolution", "content": Legal.Section_Dispute}, 
    {"id": 8, "title": "General", "content": Legal.Section_General}
]

const LegalDocModal = (props) => {
const [ mobileNavigationToggle, setMobileNavigationToggle ] = useState(false);
const [ selectedSection, setSelectedSection ] = useState(null);
const [ selectedTitle, setSelectedTitle ] = useState(null);
const { isOpen, handleClose, legalDoc } = props;

// const handleOpen = () => {
//     setIsOpen(true);
// };

const clearClose = () => {
    setSelectedSection(null);
    setSelectedTitle(null)
    handleClose();
};

const handleSectionSelection = (section) => {
    setSelectedTitle(section.title)
    setSelectedSection(section.content)
    if(window.mobileCheck()) {
        setMobileNavigationToggle(false)
    }
}

const toggleNavigation = () => {
    if(mobileNavigationToggle) {
        return;
    }
    setMobileNavigationToggle(!mobileNavigationToggle);
}

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

// window.mobileCheck = function isMobileDevice() {
//     const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     return viewportWidth < 768; // Adjust the breakpoint as needed
// }

const DesktopLayout = () => {
    return (
        <>
            <div className="modal-left">
                <div className="modal-sections">
                    {legalDoc==="Terms & Conditions" ?
                        TermsList.map((section) => {
                            return(<div key={section.id} className={`modal-section ${selectedTitle===section.title ? "modal-section-active" : ""}`} onClick={() => handleSectionSelection(section)}>{section.title}</div>)
                        }) :
                        PrivacyList.map((section) => {
                            return(<div key={section.id} className={`modal-section ${selectedTitle===section.title ? "modal-section-active" : ""}`} onClick={() => handleSectionSelection(section)}>{section.title}</div>)
                        })
                    }
                </div>
            </div>
            <div className="modal-right">
                {selectedSection === null ? <h2>Please select a section to view it</h2> : selectedSection}
            </div>
        </>
    );
}

const MobileLayout= () => {
    return (
        <>
        {mobileNavigationToggle === true ?
            <div className="modal-mobile-nav">
                {legalDoc==="Terms & Conditions" ?
                    TermsList.map((section) => {
                        return(<div key={section.id} className={`modal-mobile-section ${selectedTitle===section.title ? "modal-section-active" : ""}`} onClick={() => handleSectionSelection(section)}>{section.title}</div>)
                    }) :
                    PrivacyList.map((section) => {
                        return(<div key={section.id} className={`modal-mobile-section ${selectedTitle===section.title ? "modal-section-active" : ""}`} onClick={() => handleSectionSelection(section)}>{section.title}</div>)
                    })
                }
            </div> 
            :
            <div className="modal-mobile-content">
                {selectedSection === null ? <h2>Please choose a section from Navigation above</h2> : selectedSection}
            </div>
        }
        </>
    )
}

return (
    <>
    <AnimatePresence>
        {isOpen && (
        <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {window.mobileCheck() ? 
                <button className="modal-mobile-sections" onClick={toggleNavigation}>
                    Sections
                </button> 
                :
                <></>
            }
            <div className="modal-content">
                {window.mobileCheck() ? <MobileLayout /> : <DesktopLayout />}
            </div>
            <button className="modal-close" onClick={clearClose}>
            Close
            </button>
        </motion.div>
        )}
    </AnimatePresence>
    </>
);
};

export default LegalDocModal;
