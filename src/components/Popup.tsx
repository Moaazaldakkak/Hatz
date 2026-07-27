interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  imageUrl?: string;
  title?: string;
}

export default function Popup({ open, onClose, children, imageUrl, title }: PopupProps) {
  return (
    <>
      <div className={`popup-overlay${open ? ' active' : ''}`} onClick={onClose} />
      <div className={`popup-panel${open ? ' active' : ''}`}>
        <button className="popup-close" onClick={onClose}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 7.5L15 15M15 15L7.5 22.5M15 15L22.5 22.5M15 15L7.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="popup-body">
          {imageUrl && <img className="popup-image" src={imageUrl} alt={title || ''} />}
          <div className="popup-content">{children}</div>
        </div>
      </div>
    </>
  );
}
