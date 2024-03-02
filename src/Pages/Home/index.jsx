import { useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import './index.scss';
import { useEffect } from 'react';
import Logo from '../../assets/image/logo.png';
import ProfilePic from '../../assets/image/pic.png';


function HomePage() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = [
        'a',
        'l',
        'w',
        'a',
        'n'
    ];
    
    const jobArray = [
        'S',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'E',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r',
        '.'
    ];

    useEffect(()=>{
        const timout = setTimeout(()=> 
            setLetterClass('text-animate-hover')
            , 4000
        );

        return () => clearTimeout(timout);
    }, []);

    return (
        <div className="container portfolio-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <img src={ Logo } alt='small logo' className='logo-title'/>
                    <AnimatedLetters
                    letterClass={ letterClass }
                    strArray={ nameArray }
                    idx={17}/>
                    <br />
                    <AnimatedLetters
                    letterClass={ letterClass }
                    strArray={ jobArray }
                    idx={22}/>
                </h1>
                <h2>Software Engineer | Flutter Developer</h2>
                <a href='#_blank' className='flat-button'>Download CV</a>
            </div>
            <img src={ ProfilePic } alt='personal pic' className='profile-pic'/>
        </div>
    );
}

export default HomePage;