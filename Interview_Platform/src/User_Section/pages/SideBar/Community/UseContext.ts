import { createContext } from 'react';

import { useContext } from 'react';

export type Channel = {
  id: string;
  name: string;
};

export type ChannelContextType = {
  channels: Channel[];
  selectedChannelId: string | null;
  addChannel: (name: string) => void;
  selectChannel: (id: string) => void;
  selectedChannel: Channel | null;
};

export const useChannelContext = (): ChannelContextType => {
  const context = useContext(ChannelContext);
  if (!context) {
    throw new Error('useChannelContext must be used within a ChannelProvider');
  }
  return context;
};

export const ChannelContext = createContext<ChannelContextType | undefined>(
  undefined,
);
