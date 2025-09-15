import React from 'react';

const VideoBackground = ({ children, videoSrc = "/videos/swpvideo.mp4", opacity = 0.3 }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <video
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: opacity,
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
