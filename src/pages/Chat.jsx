import React from 'react';
import ChatHeader from "../components/chat/ChatHeader/ChatHeader";
import MessagesList from "../components/chat/MessagesList/MessagesList";
import AddMessageForm from "../components/chat/AddMessageForm/AddMessageForm";

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />
            <MessagesList />
            <AddMessageForm />
        </div>
    );
};

export default Chat;