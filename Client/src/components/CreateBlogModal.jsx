import React from "react";

export default function CreateBlogModal({ children, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          width: 400px;
          max-width: 90%;
        }
      `}</style>
    </div>
  );
}