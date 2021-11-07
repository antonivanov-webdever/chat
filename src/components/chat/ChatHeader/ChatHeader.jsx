import './ChatHeader.css'
import React from 'react';

const ChatHeader = () => {
    return (
        <header className="chat-header">
            <div className="chat-header__container">
                <div className="chat-user">
                    <img src="./avatar.png" alt="" className="chat-user__avatar"/>
                    <span className="chat-user__name">First name +Last name</span>
                </div>
            </div>
        </header>
    );
};

export default ChatHeader;