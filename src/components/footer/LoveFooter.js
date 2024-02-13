import { useEffect, useRef, useState } from 'react'
import heart from '../../assets/footer/heart.png'
import './footer.css';

export default function LoveFooter() {
    const [heartIndex, updateHeartIndex] = useState(0);
    const [heartBottom, updateHeartBottom] = useState(-16);

    const hearts = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const [heartOpacity, updateHeartOpacity] = useState(1);

    useEffect(() => {
        const heartMovement = setTimeout(() => {
            updateHeartBottom(heartBottom + 0.1);
            updateHeartOpacity(heartOpacity - 0.1 / 46);
            hearts[heartIndex].current.style.bottom = heartBottom + 'dvw';
            hearts[heartIndex].current.style.opacity = heartOpacity;
            if (heartBottom > 30) {
                updateHeartIndex(Math.floor(Math.random() * (hearts.length)));
                updateHeartBottom(-16);
                updateHeartOpacity(1);
            }
        }, 1000 / 270);

        return () => {
            clearTimeout(heartMovement);
        }
    }, [heartBottom, heartOpacity]);

    return (
        <div className='footer'>
            <div ref={hearts[0]} className='heart' style={{ left: '1dvw', content: `url(${heart})` }} />
            <div ref={hearts[1]} className='heart' sstyle={{ left: '16.3dvw', content: `url(${heart})` }} />
            <div ref={hearts[2]} className='heart' style={{ left: '32.6dvw', content: `url(${heart})` }} />
            <div ref={hearts[3]} className='heart' style={{ left: '48.9dvw', content: `url(${heart})` }} />
            <div ref={hearts[4]} className='heart' style={{ left: '65.2dvw', content: `url(${heart})` }} />
            <div ref={hearts[5]} className='heart' style={{ left: '81.5dvw', content: `url(${heart})` }} />
        </div>
    )
}