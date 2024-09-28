import React from 'react';

interface Podcast {
    imgSrc: string;
    title: string;
    description: string;
    date: string;
    duration: string;
}

interface PodcastCardProps {
    podcast: Podcast;
    onClick: () => void;  // Add onClick prop to trigger podcast selection
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast, onClick }) => {
    return (
        <div className="podcast-card" onClick={onClick}>
            <img src={podcast.imgSrc} alt={podcast.title} />
            <h3>{podcast.title}</h3>
            <p>{podcast.description}</p>
            <span>{podcast.date}</span>
            <span>{podcast.duration}</span>
        </div>
    );
};

export default PodcastCard;
