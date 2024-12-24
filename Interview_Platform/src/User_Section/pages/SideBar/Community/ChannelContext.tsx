import React, { useState } from 'react';
import { Channel, ChannelContext } from './UseContext';

export const ChannelProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [channels, setChannels] = useState<Channel[]>([
    { id: '1', name: 'General' },
    { id: '2', name: 'Announcements' },
  ]);

  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(
    null,
  );

  const addChannel = (name: string) => {
    const newChannel = { id: `${channels.length + 1}`, name };
    setChannels([...channels, newChannel]);
  };

  const selectChannel = (id: string) => {
    setSelectedChannelId(id);
  };

  const selectedChannel =
    channels.find((channel) => channel.id === selectedChannelId) || null;

  return (
    <ChannelContext.Provider
      value={{
        channels,
        selectedChannelId,
        addChannel,
        selectChannel,
        selectedChannel,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
