'use client';

import { useEffect, useRef } from 'react';

export default function ChatbotLeo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Initial size (closed)
    iframe.style.width = '60px';
    iframe.style.height = '60px';

    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'leo_chatbot_is_open') {
        if (event.data.isOpen) {
          iframe.style.width = '370px';
          iframe.style.height = '600px';
        } else {
          iframe.style.width = '60px';
          iframe.style.height = '60px';
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://smartagent.leoai.agency/chatbot/widget?clientKey=d2582d2b1baa10f8f2768ddffb71c23b"
      frameBorder={0}
      style={{
        border: 0,
        right: 10,
        bottom: 10,
        position: 'fixed',
        zIndex: 999999,
        transition: 'width 0.3s ease, height 0.3s ease',
      }}
      allow="clipboard-write; microphone"
      id="leo-chatbot-iframe"
    />
  );
}
