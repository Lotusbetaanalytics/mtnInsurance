import * as React from 'react';


const Input = ({ onChange, value, type, title, readOnly = false, }) => {
    return <div className="mtn__InputContainer mtn__child">
        <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={title}
            readOnly={readOnly}
        />
    </div>;
};

export default Input;
