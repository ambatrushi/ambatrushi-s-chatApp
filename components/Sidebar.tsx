
import React from 'react';
import type { User } from '../types';
import ContactItem from './ContactItem';
import SettingsPanel from './SettingsPanel';
import SearchIcon from './icons/SearchIcon';

interface SidebarProps {
  users: User[];
  currentUser: User;
  selectedContactId: number | null;
  onSelectContact: (id: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ users, currentUser, selectedContactId, onSelectContact, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col w-64 md:w-80 lg:w-96 bg-white border-r border-gray-200">
      <div className="flex flex-col flex-shrink-0 p-4">
        <h1 className="text-2xl font-bold text-gray-800">Chats</h1>
        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search or start new chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto custom-scrollbar">
        <div className="flex flex-col">
          {users.map(user => (
            <ContactItem
              key={user.id}
              user={user}
              isSelected={user.id === selectedContactId}
              onSelect={() => onSelectContact(user.id)}
            />
          ))}
        </div>
      </div>
      <SettingsPanel user={currentUser} />
    </div>
  );
};

export default Sidebar;
