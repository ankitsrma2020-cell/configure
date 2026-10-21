import '../modal.css';

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div className="modal-card"><div className="card-heading"><h2 id="modal-title">{title}</h2><button className="icon-button" aria-label="Close dialog" onClick={onClose}>×</button></div>{children}</div></div>;
}

