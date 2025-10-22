
import React, { useEffect, useRef } from 'react';
import type { User, Message as MessageType } from '../types';
import Message from './Message';
import MessageInput from './MessageInput';
import SearchIcon from './icons/SearchIcon';
import MoreVertIcon from './icons/MoreVertIcon';

interface ChatWindowProps {
  contact: User;
  messages: MessageType[];
  onSendMessage: (text: string) => void;
  currentUserId: number;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ contact, messages, onSendMessage, currentUserId }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col flex-auto h-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full object-cover" src={contact.avatar} alt={contact.name} />
          <div className="ml-4">
            <p className="text-lg font-semibold text-gray-800">{contact.name}</p>
            <p className="text-sm text-green-500">{contact.online ? 'Online' : 'Offline'}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
           <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none">
            <SearchIcon className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none">
            <MoreVertIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-auto overflow-y-auto p-6 bg-gray-100 custom-scrollbar">
        <div className="flex flex-col space-y-4">
          {messages.map(message => (
            <Message key={message.id} message={message} isSent={message.senderId === currentUserId} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatWindow;
