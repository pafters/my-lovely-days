import { useEffect, useState } from "react";
import './splash.css';
export default function SplashScreen() {

    const [dots, updateDots] = useState('');
    const [image, updateImage] = useState(null);

    useEffect(() => {
        const updateInterval = setTimeout(() => {
            updateDots(dots + '.');
            if (dots.length > 2) {
                updateDots('');
            }
        }, 500)
        return () => {
            clearTimeout(updateInterval);
        }
    }, [dots]);

    useEffect(() => {
        const images = importAll(require.context('../../assets/', false, /\.(gif)$/));
        const shownImage = images[Math.floor(Math.random() * (images.length - 1))];
        updateImage(shownImage);
    }, [image])


    function importAll(r) {
        return r.keys().map(r);
    }

    return (
        <div className="splash-container" >
            <div>
                <div className="splash-media" style={{ content: `url(${image})` }} />
                <p className="splash-notice">Подсчитываем<br></br>секундочки{dots}</p>
            </div>
        </div >
    )
}