import { useEffect, useRef } from "react";
import ChatMessage from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatmessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if(containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatmessages]);
  return (
    <div className="chat-messages-container js-chat-message-container" ref={chatMessagesRef}>
      {chatmessages.length === 0 && <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p>}
      {chatmessages.map((chatMessage, index) => {
        return (
          <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={index} />
        );
      })}
    </div>
  );
}

export default ChatMessages;