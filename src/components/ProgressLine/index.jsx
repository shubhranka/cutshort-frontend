import "./index.css"
const ProgressLine = ({ progress }) => {
    return (
        <div className="progress-line">
            <div className="background-line"></div>
            <div className="progress-line__progress" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressLine;