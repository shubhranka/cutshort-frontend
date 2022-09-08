import NumberCircle from "../../components/NumberCircle";
import ProgressLine from "../../components/ProgressLine";
import {Link} from "react-router-dom";
import "./index.css";
const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
    <ProgressLine progress={progress}/>
    <Link to={"/first"}>
      <NumberCircle number={1} active={progress >= 20 ? true : false } />
    </Link>
    
    <Link to={"/second"}>
      <NumberCircle number={2} active={progress >= 50 ? true : false }/>
    </Link>
    
    <Link to={"/third"}>
      <NumberCircle number={3} active={progress >= 80 ? true : false }/>
    </Link>
    
    <Link to={"/fourth"}>
      <NumberCircle number={4} active={progress >= 100 ? true : false }/>
    </Link>
    </div>
  );
};

export default ProgressBar;