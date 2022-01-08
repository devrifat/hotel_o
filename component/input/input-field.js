const InputFields = ({type, placeholder, value, handeler}) => {
    return(
        <input
            type={type}
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={handeler}
        />
    )
}

export default InputFields