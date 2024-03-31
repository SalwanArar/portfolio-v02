import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../../components/AnimatedLetters';
import TextSphare from '../../components/TextSphare';

function SkillsPage() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const titleArray = [
        'S',
        'k',
        'i',
        'l',
        'l',
        's'
    ];

    useEffect(() => {
        const timout = setTimeout(() => 
            setLetterClass('text-animate-hover'),
            2000
        );
        return () => {
            clearTimeout(timout);
        };
    }, []);

    return (
        <div className="container skills-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={ titleArray } letterClass={ letterClass } idx={10}/>
                </h1>
                <p>As a software engineer, I excel in <b>Flutter</b> and <b>ReactJS</b> for cross-platform and <b>web development</b>, while also specializing in <b>Blockchain</b>, <b>NLP</b>, and <b>MySQL</b> for diverse technological solutions.</p>
                <p>My expertise spans from crafting sleek mobile applications to pioneering <b>blockchain</b> solutions and leveraging <b>NLP</b> for intelligent data processing, ensuring robust and innovative outcomes for every project.</p>
                <p>With a commitment to excellence, I deliver impactful experiences by harnessing the latest technologies and pushing the boundaries of what's possible in software engineering.</p>
            </div>
            <TextSphare width={250}/>
        </div>
    );
}

export default SkillsPage;