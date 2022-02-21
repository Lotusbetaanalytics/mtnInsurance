import * as React from 'react';


const Radio = ({ onChange, title, options }) => {
    return <div className="mtn__InputContainer mtn__child radioFlex">
        <label>{title}</label>
        {options.map((item) => (
            <span> <input
                type="radio"
                onChange={onChange}
                value={item.value}
                name={title}
            />{item.value}</span>
        ))}

    </div>;
};

export default Radio;
