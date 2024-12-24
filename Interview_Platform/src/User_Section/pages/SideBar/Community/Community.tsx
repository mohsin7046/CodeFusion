import React, { useState } from 'react';

type Channel = {
  id: string;
  name: string;
};

type Props = {
  channels: Channel[];
  selectedChannelId: string | null;
  onChannelSelect: (id: string) => void;
  onAddChannel: (name: string) => void;
};

const CommunitySidebar: React.FC<Props> = ({
  channels,
  selectedChannelId,
  onChannelSelect,
  onAddChannel,
}) => {
  const [newChannelName, setNewChannelName] = useState('');

  const handleAddChannel = () => {
    if (newChannelName.trim()) {
      onAddChannel(newChannelName.trim());
      setNewChannelName('');
    }
  };

  return (
    <div className="bg-gray-900 text-white w-full sm:w-64 flex-shrink-0 h-screen overflow-y-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Communities</h2>
        <button className="text-gray-400 hover:text-white text-xl focus:outline-none">
          +
        </button>
      </div>

      <div className="space-y-4">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
              selectedChannelId === channel.id
                ? 'bg-gray-700'
                : 'hover:bg-gray-800'
            }`}
            onClick={() => onChannelSelect(channel.id)}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 text-black font-bold rounded-full">
              {channel.name[0].toUpperCase()}
            </div>
            <span className="text-lg">{channel.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newChannelName}
            onChange={(e) => setNewChannelName(e.target.value)}
            placeholder="Add channel"
            className="flex-grow bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleAddChannel}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar;
