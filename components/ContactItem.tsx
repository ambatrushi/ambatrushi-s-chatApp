
import React from 'react';
import type { User } from '../types';

interface ContactItemProps {
  user: User;
  isSelected: boolean;
  onSelect: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ user, isSelected, onSelect }) => {
  const itemClasses = `
    flex items-center px-4 py-3 cursor-pointer transition-colors duration-200 ease-in-out
    ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
  `;
  const textColor = isSelected ? 'text-blue-100' : 'text-gray-500';

  return (
    <div className={itemClasses} onClick={onSelect}>
      <div className="relative">
        <img className="w-12 h-12 rounded-full object-cover" src={user.avatar} alt={user.name} />
        {user.online && (
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
        )}
      </div>
      <div className="ml-4 flex-grow">
        <div className="flex items-center justify-between">
          <p className={`text-base font-semibold ${isSelected ? 'text-white' : 'text-gray-800'}`}>{user.name}</p>
          <p className={`text-xs ${textColor}`}>{user.lastMessageTime}</p>
        </div>
        <p className={`text-sm truncate ${textColor}`}>{user.lastMessage}</p>
      </div>
    </div>
  );
};

export default ContactItem;
