import { useEffect, useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function OpexMxVideoModal({ isOpen, onClose }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isOpen) {
      const el = iframeRef.current;
      if (el) {
        el.src = '';
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose} aria-label="Close video">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/H4I4rk4Qf0M?autoplay=1"
          title="OpexMX Overview"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={iframeStyle}
        />
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
};

const modalStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  maxWidth: '800px',
  aspectRatio: '16 / 9',
  background: '#000',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
};

const closeBtnStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 10,
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255,255,255,0.15)',
  border: 'none',
  borderRadius: '50%',
  color: '#fff',
  cursor: 'pointer',
  backdropFilter: 'blur(4px)',
};

const iframeStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
};
