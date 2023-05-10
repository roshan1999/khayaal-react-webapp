import './FilledButton.css'

export default function FilledButton(props) {
    return (
        <>
            <button className="btn-filled">
                {props.children}
            </button>
        </>
    );
}