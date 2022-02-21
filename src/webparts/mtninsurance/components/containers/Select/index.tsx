import * as React from 'react';


const Select = ({ onChange, value, title, options }) => {

    return <div className="mtn__InputContainer mtn__child">
        {/* <label>{title}</label> */}
        <select
            onChange={onChange}
            // value={value}
            defaultValue={title}
        > <option value={title} disabled>{title}</option>
            {options && options.map((item) => (
                <option value={item.value}>{item.value}</option>
            ))}


        </select>
    </div>;
};

export default Select;
