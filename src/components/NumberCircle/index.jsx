import "./index.css"
const NumberCircle = ({ number,active }) => {
    let className = "number-circle";
    if (active) {
        className += " active";
    }
    return (
        <div className={className}>
            <p>{number}</p>
        </div>
    );
}

export default NumberCircle;