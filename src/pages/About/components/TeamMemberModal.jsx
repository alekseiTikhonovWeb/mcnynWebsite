import React from 'react';

function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={member.name}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {member.photo && (
            <img
              src={member.photo}
              alt={member.name}
              style={{ width: 90, height: 110, objectFit: 'cover', objectPosition: 'top', borderRadius: 'var(--r-sm)', flexShrink: 0, background: 'var(--linen)' }}
            />
          )}
          <div>
            <h3>{member.name}</h3>
            <strong>{member.title}</strong>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: member.bio }} />
      </div>
    </div>
  );
}

export default TeamMemberModal;
