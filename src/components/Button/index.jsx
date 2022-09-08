import { Link } from "react-router-dom";
import "./index.css";
const Button = ({text,linkto})=>{
    return (
        <Link className="button" to={linkto}>{text?text:"Create Workspace"}</Link>
    )
}

export default Button;