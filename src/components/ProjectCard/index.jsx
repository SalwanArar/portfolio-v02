import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({
    title,
    picture,
    alt,
    discription,
    icons
}) {
    return (
        <div className='project-card'>
            <img src={picture} alt={alt} />
                <h2>{ title }</h2>
                <h2>Snowman Game</h2>
            <div className="card-discription-content">
                <p>{discription}</p>
                <p>Mollit adipisicing laborum voluptate cupidatat laborum reprehenderit id commodo ullamco excepteur dolore. In ut aute cupidatat consequat aliqua anim sunt nisi irure esse. Veniam consectetur cillum deserunt reprehenderit amet do sit quis aute. Velit sunt duis esse ut. Nulla sunt ex cupidatat aliquip cupidatat Lorem reprehenderit mollit nulla veniam laboris ex consequat. Voluptate aliqua culpa ad non nisi nostrud fugiat consectetur consequat culpa Lorem mollit.</p>
            </div>
            <hr />
            <div className='brands-container'>
                <div className="card-brands">
                    {
                        icons
                    }
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;