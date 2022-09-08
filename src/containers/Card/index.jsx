import "./index.css";
const Card = ({icon,heading,content}) => {
    return (
        <div className="card">
            <div className="card_icon">
                {icon}
            </div>
            <div className="card_heading">
                <h4>{heading}</h4>
            </div>
            <div className="card_content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Card;