
import type { User, Message } from './types';

export const CURRENT_USER_ID = 1;

export const USERS: User[] = [
  { id: 1, name: 'You', avatar: 'https://picsum.photos/seed/you/200', lastMessage: 'See you tomorrow!', lastMessageTime: '10:45 AM', online: true },
  { id: 2, name: 'Alice', avatar: 'https://picsum.photos/seed/alice/200', lastMessage: 'Hey, how are you?', lastMessageTime: '11:30 AM', online: true },
  { id: 3, name: 'Bob', avatar: 'https://picsum.photos/seed/bob/200', lastMessage: 'Can you send me the file?', lastMessageTime: '10:15 AM', online: false },
  { id: 4, name: 'Charlie', avatar: 'https://picsum.photos/seed/charlie/200', lastMessage: 'Great, thanks!', lastMessageTime: 'Yesterday', online: true },
  { id: 5, name: 'Diana', avatar: 'https://picsum.photos/seed/diana/200', lastMessage: 'Meeting at 3 PM.', lastMessageTime: 'Yesterday', online: false },
  { id: 6, name: 'Eve', avatar: 'https://picsum.photos/seed/eve/200', lastMessage: 'Happy Birthday!', lastMessageTime: '2 days ago', online: false },
];

export const MESSAGES: Record<string, Message[]> = {
  '2': [
    { id: 1, text: 'Hi Alice!', senderId: 1, timestamp: '11:28 AM' },
    { id: 2, text: 'Hey! How are you doing?', senderId: 2, timestamp: '11:30 AM' },
    { id: 3, text: "I'm good, thanks for asking. Just working on the new project.", senderId: 1, timestamp: '11:31 AM' },
    { id: 4, text: "Sounds interesting! Let me know if you need any help.", senderId: 2, timestamp: '11:32 AM' },
  ],
  '3': [
    { id: 1, text: 'Hi Bob, can you send me the file we discussed?', senderId: 1, timestamp: '10:14 AM' },
    { id: 2, text: 'Sure, I will send it in a moment.', senderId: 3, timestamp: '10:15 AM' },
  ],
  '4': [
    { id: 1, text: 'Hey Charlie!', senderId: 1, timestamp: 'Yesterday' },
  ],
   '5': [
    { id: 1, text: 'Hey Diana, are we still on for the meeting at 3?', senderId: 1, timestamp: 'Yesterday' },
    { id: 2, text: 'Yes, see you then!', senderId: 5, timestamp: 'Yesterday' },
  ],
   '6': [
    { id: 1, text: 'Happy Birthday Eve! 🎉', senderId: 1, timestamp: '2 days ago' },
  ],
};
