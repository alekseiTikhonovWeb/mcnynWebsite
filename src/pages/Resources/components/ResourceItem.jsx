function ResourceItem({ item }) {
  const { title, description, link, locked } = item;

  if (locked) {
    return (
      <div className="locked-item">
        <div className="linkmeta">
          <strong>{title}</strong>
          <span>{description}</span>
        </div>
        <span className="taglock">Portal</span>
      </div>
    );
  }

  return (
    <div className="linkitem">
      <div className="linkmeta">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <a className="taglink" href={link} target="_blank" rel="noopener noreferrer">Download</a>
    </div>
  );
}

export default ResourceItem;
