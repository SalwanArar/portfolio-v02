import './index.scss';

function AnimatedLetters(props) {
    return (
        <span>
            {
                props.strArray.map((char, i) =>
                    <span key={char + i} className={`${props.letterClass} _${i + props.idx}`}>
                        { char }
                    </span>
                )
            }
        </span>
    );
}

export default AnimatedLetters;