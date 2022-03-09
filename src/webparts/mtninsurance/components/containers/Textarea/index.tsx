import * as React from 'react';


const Textarea = ({ onChange, value, title, required = false }) => {
    return <div className="mtn__InputContainer mtn__adult">
        <textarea
            onChange={onChange}
            value={value}
            placeholder={title}
            required={required}
        ></textarea>
    </div>;
};

export default Textarea;
