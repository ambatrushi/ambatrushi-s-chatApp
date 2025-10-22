
export interface User {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  online?: boolean;
}

export interface Message {
  id: number;
  text: string;
  timestamp: string;
  senderId: number;
  isRead?: boolean;
}
