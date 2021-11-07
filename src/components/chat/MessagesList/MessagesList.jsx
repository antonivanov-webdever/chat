import './MessagesList.css'
import React, {useEffect, useState} from 'react';
import Message from "../Message/Message";

const MessagesList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([1,2,3,4,5])
    }, [])

    return (
        <div className="messages">
            {messages.map(message =>
                <Message key={message} message={message}/>
            )}
        </div>
    );
};

export default MessagesList;