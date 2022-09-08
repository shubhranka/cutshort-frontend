import "./index.css";
const HeadingContainer = ({ children, ...props }) => {
    return (
      <div className="header_container">
        {children}
      </div>
    );
  };
  
export default HeadingContainer;