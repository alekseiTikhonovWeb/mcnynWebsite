import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../components/icons.jsx';
import { programs } from '../../Programs/programsData';

function ProgramsOverview() {
  return (
    <section id="programs" aria-label="Our programs">
      <div className="wrap">
        <div className="programs-header">
          <div>
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-h2">Our Programs</h2>
          </div>
          <p className="programs-lead">
            Two regional programs supporting care for families across South West Ontario.
          </p>
        </div>

        <div className="prog-grid">
          {programs.map(({ id, name, Icon, color, summary }) => (
            <div key={id} className={`prog-card prog-card--${id}`}>
              <span className="prog-card-bg-char" aria-hidden="true">P</span>
              <div className="prog-icon"><Icon stroke={color} /></div>
              <h3 className="prog-h3">{name}</h3>
              <p className="prog-desc">{summary}</p>
              <div className="prog-links">
                <Link to="/programs" className="prog-link">Program overview</Link>
                <Link to="/resources" className="prog-link">Clinical tools &amp; resources</Link>
                <Link to="/education" className="prog-link">Education sessions</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-more">
          <Link to="/programs" className="btn btn-a">View all programs &amp; deliverables <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsOverview;
