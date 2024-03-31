import TagCloud from '@frank-mayer/react-tag-cloud';
import './index.scss';

function TextSphare({width}) {
    return(
        <TagCloud
            options={() => ({
                radius: width,
                maxSpeed: "fast",
            })}
            className="sphare"
            // onClick={(tag) => alert(tag)}
            onClickOptions={{ passive: true }}
        >
            {[
                "JavaScript",
                "ReactJs",
                "HTML",
                "CSS",
                "Blockchain",
                "Git",
                "Laravel",
                "RestAPI",
                "C++",
                "PHP",
                "MySQL",
                "PL/SQL",
                "Solidity",
                "Dart",
                "Flutter",
                "Scss",
                "Java",
                "C#",
            ]}
        </TagCloud>
    );
}

export default TextSphare;