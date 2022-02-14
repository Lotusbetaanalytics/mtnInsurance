import * as React from 'react';


const Select = ({ onChange, value, children, title }) => {
    return <div className="mtn__InputContainer mtn__child">
        <label>{title}</label>
        <select
            onChange={onChange}
            value={value}
        >{children}</select>
    </div>;
};

export default Select;
