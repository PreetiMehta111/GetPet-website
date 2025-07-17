// src/Pages/ChatBox.jsx
import React, { useState, useRef, useEffect } from 'react';

// Let's create a simple chat box that users can toggle and send messages in
const ChatBox = () => {
  // State to manage chat box visibility and messages
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  // Ref to auto-scroll to the latest message
  const messagesEndRef = useRef(null);

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add the message to the history with a timestamp
      setMessages([...messages, { text: newMessage, timestamp: new Date().toLocaleTimeString() }]);
      setNewMessage(''); // Clear the input
    }
  };

  // Toggle the chat box open/closed
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating chat button, similar to the cart button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-10 left-10 bg-[#5C4033] text-white py-3 px-5 rounded-full hover:bg-[#4a332a] transition shadow-lg z-50"
        aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
      >
        {isChatOpen ? 'Close Chat' : 'Chat with Us'}
      </button>

      {/* Chat box modal, only shown when isChatOpen is true */}
      {isChatOpen && (
        <div className="fixed bottom-20 left-10 w-80 bg-white rounded-lg shadow-xl z-50">
          {/* Chat header */}
          <div className="bg-[#5C4033] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">GetPet Support</h3>
            <button
              onClick={toggleChat}
              className="text-[#F4A261] hover:text-white transition"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Message history */}
          <div className="h-64 overflow-y-auto p-4 bg-[#f0e6dc] flex flex-col space-y-3">
            {messages.length === 0 ? (
              <p className="text-gray-600 text-sm text-center">Start the conversation!</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="bg-white p-2 rounded-lg shadow-sm">
                  <p className="text-gray-800 text-sm">{msg.text}</p>
                  <p className="text-gray-500 text-xs text-right">{msg.timestamp}</p>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message input form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F4A261] text-gray-800"
                aria-label="Type your message"
              />
              <button
                type="submit"
                className="bg-[#5C4033] text-white px-4 py-2 rounded-lg hover:bg-[#4a332a] transition"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBox;