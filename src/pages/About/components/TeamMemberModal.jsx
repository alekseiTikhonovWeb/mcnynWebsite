function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={member.name}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="modal-head">
          <img src={member.photo} alt={member.name} className="modal-photo" />
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
