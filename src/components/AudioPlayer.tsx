import React, { useEffect, useState } from 'react';
import { useAudio } from '../context/AudioContext';

const AudioPlayer: React.FC = () => {
    const { currentAudio } = useAudio();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentPodcast, setCurrentPodcast] = useState<{ imgSrc: string, title: string } | null>(null);

    useEffect(() => {
        if (currentAudio) {
            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);
            const handleTimeUpdate = () => setProgress((currentAudio.currentTime / currentAudio.duration) * 100);

            currentAudio.addEventListener('play', handlePlay);
            currentAudio.addEventListener('pause', handlePause);
            currentAudio.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                currentAudio.removeEventListener('play', handlePlay);
                currentAudio.removeEventListener('pause', handlePause);
                currentAudio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [currentAudio]);

    const handlePlayPause = () => {
        if (currentAudio) {
            if (isPlaying) {
                currentAudio.pause();
            } else {
                currentAudio.play();
            }
        }
    };

    useEffect(() => {
        if (currentAudio) {
            setCurrentPodcast({
                imgSrc: currentAudio.dataset.imgSrc || '',
                title: currentAudio.dataset.title || ''
            });
        }
    }, [currentAudio]);

    if (!currentPodcast) return null;

    return (
        <div className="audio-player">
            <img src={currentPodcast.imgSrc} alt={currentPodcast.title} />
            <h3>{currentPodcast.title}</h3>
            {/*<button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>*/}
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default AudioPlayer;