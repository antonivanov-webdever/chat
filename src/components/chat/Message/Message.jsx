import './Message.css'
import React from 'react';

const Message = ({ message }) => {
    return (
        <div className='message'>
            <img className="message__avatar" src="./avatar.png" alt=""/>
            <div className="message__body">
                <div className="message__user-name">First name +Last name</div>
                <p className="message__text">Hi John, what do you think about corporate messengers? <br></br>I know some new apps on UC market</p>
                <span className="message__time">7:41 PM</span>
            </div>
        </div>
    );
};

export default Message;