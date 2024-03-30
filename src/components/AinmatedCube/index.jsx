import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import flutterLogo from '../../assets/icons/flutter-logo.svg';

function AnimatedCube() {
    return (
        <div className='animated-cube'>
            <div className="face">
                <img src={flutterLogo} alt='flutter logo'/>
            </div>
            <div className="face">
                <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face">
                <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face">
                <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face">
                <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face">
                <FontAwesomeIcon icon={faGitAlt} />
            </div>
        </div>
    );
}

export default AnimatedCube;