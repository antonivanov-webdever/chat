import './AddMessageForm.css'
import React, {useState} from 'react';

const AddMessageForm = () => {
    const [value, setValue] = useState('');
    const [textHeight, setTextHeight] = useState(60);
    const activeClass = value === '' ? '' : 'active';

    const changeHandler = (e) => {
        setTextHeight(e.target.scrollHeight)
        setValue(e.target.value)
    }

    return (
        <form className="add-message-form">
            <textarea
                name="message"
                className="add-message-form__textarea"
                placeholder="Enter text message..."
                onChange={changeHandler}
                style={{height: textHeight + 'px'}}
            />
            <button
                type="submit"
                className={"add-message-form__button " + activeClass}
                disabled={value === ''}
            >
                <svg width="35" height="36" viewBox="0 0 35 36" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M34.9222 2.00038C35.0017 1.80162 35.0212 1.58387 34.9782 1.37415C34.9351 1.16442 34.8315 0.971925 34.6801 0.820535C34.5287 0.669146 34.3363 0.565517 34.1265 0.522494C33.9168 0.479472 33.699 0.498948 33.5003 0.578509L33.2925 0.661634L1.67872 13.3054L1.67653 13.3076L0.687783 13.7013C0.500511 13.776 0.337532 13.901 0.216848 14.0625C0.0961641 14.2241 0.0224721 14.4158 0.00391212 14.6165C-0.0146478 14.8173 0.0226467 15.0193 0.111676 15.2002C0.200705 15.3811 0.338005 15.5339 0.508408 15.6416L1.40528 16.2104L1.40747 16.2148L11.389 22.5651L12.334 23.1666L12.9356 24.1116L19.2859 34.0932L19.2903 34.0976L19.859 34.9944C19.9671 35.1642 20.12 35.3008 20.3008 35.3893C20.4815 35.4778 20.6832 35.5146 20.8836 35.4959C21.0839 35.4771 21.2753 35.4034 21.4364 35.2829C21.5976 35.1624 21.7225 34.9998 21.7972 34.8129L22.1931 33.8219L34.839 2.20601L34.9222 1.9982V2.00038ZM30.9125 6.13476L31.9428 3.55788L29.3659 4.5882L12.9728 20.9813L13.7122 21.4516C13.8478 21.5378 13.9629 21.6528 14.049 21.7885L14.5193 22.5279L30.9125 6.13476V6.13476Z"
                    />
                </svg>
            </button>
        </form>
    );
};

export default AddMessageForm;