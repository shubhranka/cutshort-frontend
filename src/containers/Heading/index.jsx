import "./index.css"
const Heading = ({ children, ...props }) => {
  return (
    <div className="heading">
        <h1>{children}</h1>
        {/* <h2>Welcome! First things first...</h2> */}
        {/* <p>You can always change them later.</p> */}
    </div>
  );
};

export default Heading;