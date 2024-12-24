import React from 'react';
import CommunitySidebar from './Community';
import ChannelDetails from './ChannelDetail';
import { useChannelContext } from './UseContext';

const Home: React.FC = () => {
  const {
    channels,
    selectedChannelId,
    addChannel,
    selectChannel,
    selectedChannel,
  } = useChannelContext();

  return (
    <div className="flex flex-grow">
      <div className="w-1/4 bg-gray-900">
        <CommunitySidebar
          channels={channels}
          selectedChannelId={selectedChannelId}
          onChannelSelect={selectChannel}
          onAddChannel={addChannel}
        />
      </div>
      <div className="w-3/4 bg-gray-100">
        <ChannelDetails selectedChannel={selectedChannel} />
      </div>
    </div>
  );
};

export default Home;
