import React from 'react';

export default function Frame({ height, handleResize }) {
  const iframeRef = React.createRef();

  return (
    <iframe
      ref={iframeRef}
      title="Rejestracja Booksy"
      style={{ width: '100%', height: `${height}px`, overflow: 'visible' }}
      width="100%"
      height={height}
      scrolling="yes"
      frameBorder="0"
      onLoad={() => handleResize(iframeRef)}
      src="https://booksy.com/widget/index.html?id=96326&amp;lang=pl&amp;country=pl&amp;mode=dialog&amp;theme=default&amp;uniqueId=58cda12586"
    />
  );
}
