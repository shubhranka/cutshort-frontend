import "./index.css"
const PrependedInput = ({ value,placeholder,url,label,onChange}) => {
    return (
        <div className="prepended_input">
            <label>{label}</label>
            <span className="prepend">{url}</span>
            <input
                type={"text"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default PrependedInput;