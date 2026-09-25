import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../components/icons.jsx';

function AboutBand() {
  return (
    <div className="about-band">
      <div className="wrap">
        <div>
          <p className="about-band-eyebrow">About MNCYN</p>
          <p className="about-band-lead">
            A regional network supporting over 20 hospital and birthing unit partners across South West Ontario — from Windsor to Guelph and beyond.
          </p>
        </div>
        <Link to="/about" className="about-band-link">
          Who We Are <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export default AboutBand;
