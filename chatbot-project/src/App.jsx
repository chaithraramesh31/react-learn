import { useState } from 'react'
import ChatInput from './Components/ChatInput'
import ChatMessages from './Components/ChatMessages'
import './App.css'

function App() {
  const [chatmessages, setChatMessages] = useState([]);

  // const [chatmessages, setChatMessages] = array;

  // const chatmessages = array[0]; // current data
  // const setChatMessages = array[1] // function to update the data
  return (
    <div className="chatbot-container">
      <ChatMessages chatmessages={chatmessages}/>
      <ChatInput chatmessages={chatmessages} setChatMessages={setChatMessages}/>
    </div>
  );
}

export default App
