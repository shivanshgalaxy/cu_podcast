// src/components/PodcastCard.tsx
import React, { useRef } from 'react';
import { useAudio } from '../context/AudioContext';

interface PodcastCardProps {
    imgSrc: string;
    title: string;
    description: string;
    date: string;
    duration: string;
    audioSrc: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ imgSrc, title, description, date, duration, audioSrc }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentAudio, setCurrentAudio } = useAudio();

    const handleCardClick = () => {
        if (audioRef.current) {
            if (currentAudio === audioRef.current) {
                if (!audioRef.current.paused) {
                    audioRef.current.pause();
                    setCurrentAudio(null);
                } else {
                    audioRef.current.play();
                }
            } else {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                setCurrentAudio(audioRef.current);
                audioRef.current.play();
            }
        }
    };

    return (
        <div className="podcast-card" onClick={handleCardClick}>
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{date} </span>
            <span>{duration}</span>
            <audio ref={audioRef} src={audioSrc} data-img-src={imgSrc} data-title={title} />
        </div>
    );
};

export default PodcastCard;