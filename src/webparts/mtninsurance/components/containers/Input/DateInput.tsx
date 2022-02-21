import * as React from 'react';


const DateInput = ({ onChange, value, type, title, readOnly = false, }) => {
    return <div className="mtn__InputContainer mtn__child">
        <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={title}
            readOnly={readOnly}
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}

        />
    </div>;
};

export default DateInput;
