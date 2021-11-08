import React, {useEffect} from 'react';
import ChatHeader from "../components/chat/ChatHeader/ChatHeader";
import MessagesList from "../components/chat/MessagesList/MessagesList";
import AddMessageForm from "../components/chat/AddMessageForm/AddMessageForm";
import chatWS from '../API/chatWS'

const Chat = () => {
    useEffect(() => {
        const wsChannel = chatWS();
    }, [])
    return (
        <div className="chat">
            <ChatHeader />
            <MessagesList />
            <AddMessageForm />
        </div>
    );
};

export default Chat;