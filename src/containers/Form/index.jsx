import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./index.css";
const Form = ({ children, onSubmit, buttonText,linkto }) => {
    return (
        <form className="form" onSubmit={(e)=>{e.preventDefault()}}>
            {children}
            <Button text={buttonText?buttonText:null} linkto={linkto}/>
        </form>
    );
}

export default Form;