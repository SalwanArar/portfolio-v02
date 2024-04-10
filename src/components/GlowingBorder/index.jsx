import './index.scss';

function GlowingBorder({children}) {
    return (
        <div className='glowing-container'>
            <div className="animated-border-box" />
            { children }
        </div>
    );
}

export default GlowingBorder;