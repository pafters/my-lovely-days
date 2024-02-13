import { motion } from "framer-motion";
import rotateNotifcation from '../../assets/rotate/rotate-notification.png';
import './rotate.css';

export default function RotateNotice() {
    return (
        <div className="rotate-container" >
            <motion.div
                animate={{
                    rotate: [0, -90, 0], // Анимируем свойство rotate от 0 до -90 градусов и обратно к 0
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 1,
                    type: 'tween'
                }}
                style={{
                    width: '50dvh',
                    margin: '0 auto',
                    marginBottom: '10dvh',
                    content: `url(${rotateNotifcation})`
                }}
            />
            <p className="rotate-notice">Поверни экран</p>
        </div>
    );
}