import React from 'react';
import PodcastCard from './PodcastCard';

interface Podcast {
    imgSrc: string;
    title: string;
    description: string;
    date: string;
    duration: string;
    audioSrc: string;
}

interface PodcastCategoryProps {
    category: string;
    podcasts: Podcast[];
    onPodcastSelect: (podcast: Podcast) => void;  // New prop to handle podcast selection
}

const PodcastCategory: React.FC<PodcastCategoryProps> = ({ category, podcasts, onPodcastSelect }) => {
    return (
        <div className="category">
            <h2>{category}</h2>
            <div className="pod-container">
                {podcasts.map((podcast, index) => (
                    <PodcastCard
                        key={index}
                        podcast={podcast}
                        onClick={() => onPodcastSelect(podcast)}  // Pass the selected podcast up
                    />
                ))}
            </div>
        </div>
    );
};

export default PodcastCategory;
