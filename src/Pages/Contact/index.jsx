import { useEffect, useState } from 'react';
import './index.scss';
import 'leaflet/dist/leaflet.css';
import AnimatedLetters from '../../components/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faMobileScreenButton, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import { iasiCoordinates } from '../../assets/data/iasiCoordinates';
import { divIcon as LeafDivIcon } from 'leaflet';
import { renderToString } from 'react-dom/server';
import colors from '../../colors.scss';
import GlowingBorder from '../../components/GlowingBorder';

function ContactPage() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const contactArray = [
        'C',
        'o',
        'n',
        'a',
        'c',
        't',
        ' ',
        'M',
        'e'
    ];

    const iasiBorders = iasiCoordinates.features[0].geometry.coordinates.map(item => [item[1], item[0]]);
    const iasiCenter = [ iasiCoordinates.features[1].geometry.coordinates[1], iasiCoordinates.features[1].geometry.coordinates[0] ];
    const markerIcon = LeafDivIcon({
        html: renderToString(
            <FontAwesomeIcon icon={faLocationDot} style={{fontSize: '36px'}} color='blue'/>
        ),
        iconSize: [29, 37],
        className: ''
    });

    useEffect(()=>{
        const timout = setTimeout(()=> 
            setLetterClass('text-animate-hover')
            , 2400
        );

        return () => clearTimeout(timout);
    }, []);

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={ letterClass }
                    strArray={ contactArray }
                    idx={10}/>
                </h1>
                <div className="contact-card">
                    <ul>
                        <li><FontAwesomeIcon icon={faMobileScreenButton}/><a href='tel:+40741405694'>+40 74 140 5694</a></li>
                        <li><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:salwan.arar.business@gmail.com'>salwan.arar.business@gmail.com</a></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /><a href='https://www.linkedin.com/in/salwanarar'>linkedin.com/in/salwanarar</a></li>
                        <li><FontAwesomeIcon icon={faGithub} /><a href='https://github.com/SalwanArar'>github.com/SalwanArar</a></li>
                        <li><FontAwesomeIcon icon={faGlobe} /><a href='/'>website</a></li>
                    </ul>
                </div>
            </div>
            <GlowingBorder >
            <MapContainer className="map-container" center={iasiCenter} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polygon
                positions={ iasiBorders }
                pathOptions={{
                    fillColor: colors.textColor,
                    fillOpacity: 0.3,
                    weight: 2,
                    dashArray: 3,
                    color: '#bc6c25ff',
                }}/>
                <Marker icon={markerIcon} alt='Iasi Center' position={ iasiCenter }>
                    <Popup>
                        <b style={{fontSize: 10}}>
                        I'm currently live in Iasi &#129392;<br /> But I'm Availanle for remote also &#128513;.
                        </b>
                    </Popup>
                </Marker>
            </MapContainer>
            </GlowingBorder>
        </div>
    );
}

export default ContactPage;