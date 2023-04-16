import './FilledButton.css'

export default function FilledButton(props) {
    const { label, action, donateSectionRef, activateDonate } = props;

    const handleDonateClick = (event) => {
        event.preventDefault();
        if(action==="Scroll") {
            donateSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        else if(action==="Popup") {
            activateDonate();
        }
    }

    return (
        <>
            <button 
            className="btn-filled"
            onClick={handleDonateClick}
            >
                {label}
            </button>
        </>
    );
}