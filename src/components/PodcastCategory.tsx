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
}

const PodcastCategory: React.FC<PodcastCategoryProps> = ({ category, podcasts }) => {
    return (
        <div className="category">
            <h2>{category}</h2>
            <div className="pod-container">
                {podcasts.map((podcast, index) => (
                    <PodcastCard
                        key={index}
                        imgSrc={podcast.imgSrc}
                        title={podcast.title}
                        description={podcast.description}
                        date={podcast.date}
                        duration={podcast.duration}
                        audioSrc={podcast.audioSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default PodcastCategory;