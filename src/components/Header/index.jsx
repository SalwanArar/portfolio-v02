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
        text: 'HOME',
        to: '/'
    },
    {
        icon: faUser,
        text: 'ABOUT',
        to: '/about'
    },
    {
        icon: faGear,
        text: 'SKILLS',
        to: '/skills'
    },
    {
        icon: faLightbulb,
        text: 'PROJECTS',
        to: '/'
    },
    {
        icon: faEnvelope,
        text: 'CONTACT',
        to: '/'
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
                                <NavLink to={link.to} className='nav-item'>
                                    <FontAwesomeIcon icon={link.icon}/>
                                    <span >{link.text}</span>
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </nav>
            <div className='brands-container'>
                <a href='https://github.com/SalwanArar' rel="noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href='https://www.linkedin.com/in/SalwanArar' rel="noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </header>
    );
}

export default Header;