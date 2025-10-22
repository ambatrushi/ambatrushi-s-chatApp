
import React, { useState } from 'react';
import SendIcon from './icons/SendIcon';
import PaperclipIcon from './icons/PaperclipIcon';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text.trim());
      setText('');
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <form onSubmit={handleSubmit}>
        <div className="relative flex">
          <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-200 ease-in-out text-gray-500 hover:bg-gray-200 focus:outline-none">
            <PaperclipIcon className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-100 rounded-md py-3 border border-gray-200"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="absolute right-0 items-center inset-y-0 flex">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-200 ease-in-out text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
            >
              <span className="font-bold hidden sm:inline">Send</span>
              <SendIcon className="w-5 h-5 ml-0 sm:ml-2" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
