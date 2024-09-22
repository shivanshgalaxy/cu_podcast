import React, { createContext, useState, useContext } from 'react';

interface AudioContextProps {
    currentAudio: HTMLAudioElement | null;
    setCurrentAudio: (audio: HTMLAudioElement | null) => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC = ({ children }) => {
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

    return (
        <AudioContext.Provider value={{ currentAudio, setCurrentAudio }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};