import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
import LoadingSpinner from '../assets/loading-spinner.gif';

function ChatInput({ chatmessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function saveInputText(event) {
    setInputText(event.target.value);
    // console.log(event.target.value);
    // console.log(event.key);
  }
  async function sendMessage() {
    if(isLoading || inputText === '') {
      return;
    }
    setIsLoading(true);
    setInputText('');

    const newChatMessages = [
      ...chatmessages,
      {
        message: inputText,
        sender: "user"
      }
    ]
    setChatMessages([...newChatMessages,
      {
        message: <img className="loader" src={LoadingSpinner}/>,
        sender: 'robot'
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot"
      }
    ]);

    setIsLoading(false);
  }

  function keyEvents(event) {
    if(event.key === 'Enter') {
      sendMessage();
    }
    if(event.key === 'Esc' || event.key === 'Escape') {
      setInputText('');
    }
  }

  return (
    <div className="chat-input-container">
      <input placeholder="Send a message to Chatbot" size="30" onChange={saveInputText} onKeyDown={keyEvents} value={inputText} className="chat-input"/>
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
}

export default ChatInput;