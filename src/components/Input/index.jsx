import "./index.css";
const Input = ({ label, value, onChange, type, placeholder }) => {
    return (
        <div className="input">
        <label>{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        </div>
    );
}

export default Input;