import * as React from 'react';


const Textarea = ({ onChange, value, title, }) => {
    return <div className="mtn__InputContainer mtn__adult">
        <textarea
            onChange={onChange}
            value={value}
            placeholder={title}
        ></textarea>
    </div>;
};

export default Textarea;
