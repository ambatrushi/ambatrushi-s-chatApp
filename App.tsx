
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import type { User, Message } from './types';
import { USERS, MESSAGES, CURRENT_USER_ID } from './constants';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(USERS);
  const [messages, setMessages] = useState<Record<string, Message[]>>(MESSAGES);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(users[0]?.id || null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user = USERS.find(u => u.id === CURRENT_USER_ID);
    setCurrentUser(user || null);
  }, []);

  const handleSelectContact = (id: number) => {
    setSelectedContactId(id);
  };

  const handleSendMessage = (text: string) => {
    if (!selectedContactId || !currentUser) return;

    const newMessage: Message = {
      id: Date.now(),
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      senderId: currentUser.id,
      isRead: true,
    };

    const contactMessages = messages[selectedContactId] || [];
    const updatedMessages = {
      ...messages,
      [selectedContactId]: [...contactMessages, newMessage],
    };
    setMessages(updatedMessages);

    // Simulate a reply
    setTimeout(() => {
      const replyMessage: Message = {
        id: Date.now() + 1,
        text: `Echo: ${text}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderId: selectedContactId,
      };
      setMessages(prev => ({
        ...prev,
        [selectedContactId]: [...(prev[selectedContactId] || []), replyMessage],
      }));
    }, 1000);
  };
  
  const filteredUsers = useMemo(() => 
    users.filter(user => 
      user.id !== CURRENT_USER_ID && 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ), [users, searchTerm]);

  const selectedContact = users.find(user => user.id === selectedContactId);

  return (
    <div className="flex h-screen w-full antialiased text-gray-800 bg-gray-100">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {currentUser && (
            <Sidebar
                users={filteredUsers}
                currentUser={currentUser}
                selectedContactId={selectedContactId}
                onSelectContact={handleSelectContact}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
        )}
        {selectedContact && currentUser ? (
            <ChatWindow
                contact={selectedContact}
                messages={messages[selectedContact.id] || []}
                onSendMessage={handleSendMessage}
                currentUserId={currentUser.id}
            />
        ) : (
          <div className="flex flex-auto items-center justify-center h-full p-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-500">Select a chat to start messaging</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
