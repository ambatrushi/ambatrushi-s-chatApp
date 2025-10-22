
import React from 'react';
import type { Message as MessageType } from '../types';

interface MessageProps {
  message: MessageType;
  isSent: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isSent }) => {
  const bubbleClasses = isSent 
    ? 'bg-blue-500 text-white rounded-br-none' 
    : 'bg-white text-gray-800 rounded-bl-none';
  
  const containerClasses = `flex items-end ${isSent ? 'justify-end' : 'justify-start'}`;

  return (
    <div className={containerClasses}>
      <div className={`flex flex-col space-y-1 text-sm max-w-xs mx-2 ${isSent ? 'order-1 items-end' : 'order-2 items-start'}`}>
        <div>
          <span className={`px-4 py-2 rounded-2xl inline-block ${bubbleClasses}`}>
            {message.text}
          </span>
        </div>
        <span className="text-xs text-gray-500">{message.timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
