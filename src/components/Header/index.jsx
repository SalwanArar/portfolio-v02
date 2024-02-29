import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/image/logo.png';
import LogoN from '../../assets/image/logo-name.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faEnvelope, faGear, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const navLinks = [
    {
        icon: faHouse,
        text: 'HOME'
    },
    {
        icon: faUser,
        text: 'ABOUT'
    },
    {
        icon: faGear,
        text: 'SKILLS'
    },
    {
        icon: faLightbulb,
        text: 'PROJECTS'
    },
    {
        icon: faEnvelope,
        text: 'CONTACT'
    },
];

function Header() {
    return (
        <header>
            <Link className='logo-container'>
                <img src={Logo} alt="logo" />
                <img src={LogoN} alt="name logo" />
            </Link>
            <nav>
                <ul>
                    {
                        navLinks.map((link, id) =>
                            <li key={id}>
                                <NavLink className='nav-item'>
                                    <FontAwesomeIcon icon={link.icon}/>
                                    <span >{link.text}</span>
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </nav>
            <div className='brands-container'>
                <a href='#_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href='#_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </header>
    );
}

export default Header;