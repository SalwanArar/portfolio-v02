import './index.scss';
import AnimatedLetters from '../../components/AnimatedLetters';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FireFlies from '../../components/FireFlies';
import AnimatedCube from '../../components/AinmatedCube';

function AboutPage() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const titleArray = [
        'A',
        'b',
        'o',
        'u',
        't',
        ' ',
        'P',
        'a',
        'g',
        'e'
    ];

    useEffect(() => {
        const timout = setTimeout(() => 
            setLetterClass('text-animate-hover')
            , 2000
        );
        return () => {
            clearTimeout(timout);
        };
    }, []);

    return (
        <motion.div className="container about-page"
        // initial={{ transform: ' translateY(-50%) scale(0.7) translateX(100%)' }}
        // animate={{ transform: ' translateY(-50%) scale(1) translateX(0%)' }}
        // transition={{ type: 'spring', bounce: 0.1 }}
        // exit={{ transform: ' translateY(-50%) scale(0.9) translateX(-100%)' }}>
        // initial={{ translateY: '-50%', scale: 0.7, translateX: '100%' }}
        // animate={{ translateY: '-50%', scale: 1, translateX: '0' }}
        // transition={{ type: 'spring', bounce: 0.1 }}
        // exit={{ scale: 0, translateY: '-50%' }}
        >
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={ titleArray } letterClass={ letterClass } idx={10}/>
                </h1>
                <p>
                    I believe that learning and hard work are essential to personal and professional growth.
                </p>
                <p>
                    That is why I am passionate about the learning process, especially when it comes to trying new things and making work even better.
                </p>
                <p>
                    I am always looking for ways to expand my knowledge to achieve even greater success.
                </p>
            </div>
            <FireFlies>
                <AnimatedCube />
            </FireFlies>
        </motion.div>
    );
}

export default AboutPage;