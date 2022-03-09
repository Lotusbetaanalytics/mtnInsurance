import * as React from 'react';


const Input = ({ onChange, value, type, title, readOnly = false, required = false, }) => {
    return <div className="mtn__InputContainer mtn__child">
        <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={title}
            readOnly={readOnly}
            required={required}
        />
    </div>;
};

export default Input;
