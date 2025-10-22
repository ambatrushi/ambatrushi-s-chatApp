
import React, { useState, useRef } from 'react';
import type { User } from '../types';
import SettingsIcon from './icons/SettingsIcon';

interface SettingsPanelProps {
  user: User;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ user }) => {
  const [profilePic, setProfilePic] = useState(user.avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setProfilePic(event.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mt-auto flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full object-cover cursor-pointer"
          src={profilePic}
          alt={user.name}
          onClick={handleImageClick}
        />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleProfilePicChange}
        />
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-800">{user.name}</p>
          <p className="text-xs text-green-500 font-medium">Online</p>
        </div>
      </div>
      <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <SettingsIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SettingsPanel;
