import "./index.css";

const LogoContainer = ({children}) => {
    return (
        <div className="logo_container">
            {children}
        </div>
    );
}

export default LogoContainer;