import * as React from 'react';


const Select = ({ onChange, value, title, options, required = false, filter = false, filterOption = "" }) => {
    return <div className="mtn__InputContainer mtn__child">
        {/* <label>{title}</label> */}
        <select
            onChange={onChange}
            value={value}
            // defaultValue={title}
            required={required}> <option value="" disabled>{title}</option>
            {options && options.map((item) => (
                !filter ? <option value={item.value}>{item.value}</option> :
                    <option value={item[filterOption]}>{item[filterOption]}</option>

            ))}

        </select>
    </div>;
};

export default Select;
