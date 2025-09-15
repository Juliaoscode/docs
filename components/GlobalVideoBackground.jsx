import React, { useEffect } from 'react';

const GlobalVideoBackground = () => {
  useEffect(() => {
    // Create video element
    const video = document.createElement('video');
    video.className = 'page-video-background';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    
    // Create source element
    const source = document.createElement('source');
    source.src = '/videos/swpvideo.mp4';
    source.type = 'video/mp4';
    
    video.appendChild(source);
    
    // Append to body
    document.body.appendChild(video);
    
    // Cleanup on unmount
    return () => {
      if (video && video.parentNode) {
        video.parentNode.removeChild(video);
      }
    };
  }, []);
  
  return null;
};

export default GlobalVideoBackground;
