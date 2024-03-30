import { useEffect, useRef } from 'react';
import './index.scss';

function FireFlies({children}) {
    const refStarsContainer = useRef();
    
    const randNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const addPixel = (color) => {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.65)`;
        pixel.style.boxShadow = `0px 0px 3px 3px rgba(${color[0] - 5}, ${color[1] - 5}, ${color[2] - 5}, 0.55)`;
        if (refStarsContainer.current) {
            refStarsContainer.current.insertBefore(pixel, refStarsContainer.current.firstChild);
        }
    };

    useEffect(() => {
        if(refStarsContainer.current) {
        }
        const letFly = () => {
            const flying = setInterval(() => {
                const angle = randNum(0, 360);
                const dist = randNum(-100, 100);
                const startPos = [ randNum(0, 500), randNum(0, 500) ];
                const toX = `${startPos[0] + (Math.cos((angle * Math.PI) / 180) * dist)}px`;
                const toY = `${startPos[1] + (Math.sin((angle * Math.PI) / 180) * dist)}px`;
                const color = [
                    randNum(188, 227),
                    randNum(108, 179),
                    randNum(37, 126)
                ];

                

                addPixel(color, startPos);

                const pixels = document.querySelectorAll('.pixel');
                const firstPixel = pixels[0];
                if (firstPixel) {
                    firstPixel.style.opacity = '0';
                    firstPixel.style.display = 'block';
                    firstPixel.animate(
                        [
                            { left: `${startPos[0]}px`, top: `${startPos[1]}px` },
                            { opacity: 1 },
                            { left: toX, top: toY, opacity: 0 }
                        ],
                        {
                            duration: 3000,
                            iterations: 2,
                            fill: 'backwards'
                        }
                    ).onfinish = () => {
                        firstPixel.remove();
                    };
                }
            }, 300);

            return () => clearInterval(flying);
        };

        letFly();
        return () => {
            clearInterval(letFly);
        };
    }, []);

    return (
        <div className="stars-container" ref={ refStarsContainer }>
            { children }
        </div>
    );
}

export default FireFlies;