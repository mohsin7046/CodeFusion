import React from 'react';
import Lottie from 'react-lottie-player';
import AnimationHome from './AnimationHome.json';

interface LottieAnimationProps {
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  width = 300,
  height = 300,
  loop = true,
  autoplay = true,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie
        animationData={AnimationHome}
        loop={loop}
        play={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;
