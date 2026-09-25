import { Link } from 'react-router-dom';

function CoursePanel({ program, isActive }) {
  const { id, label, courses } = program;

  return (
    <div className={`edu-tab-panel${isActive ? ' active' : ''}`} role="tabpanel" aria-label={label}>
      <div className="course-grid">
        {courses.map(({ title, desc, tag }) => (
          <div key={title} className={`course-card course-card--${id}`}>
            <span className={`program-tag program-tag--${id}`}>{tag}</span>
            <strong className="course-card-title">{title}</strong>
            <span className="course-card-desc">{desc}</span>
          </div>
        ))}
      </div>

      <div className="edu-placeholder">
        <h3>Session dates coming soon</h3>
        <p>
          Upcoming {id} education sessions will be listed here. <Link to="/contact">Contact us</Link> to be notified when registration opens.
        </p>
      </div>
    </div>
  );
}

export default CoursePanel;
