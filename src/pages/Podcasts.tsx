// src/pages/Podcasts.tsx
import React from 'react';
import PodcastCategory from '../components/PodcastCategory';
import { AudioProvider } from '../context/AudioContext';
import AudioPlayer from '../components/AudioPlayer';
import '../App.css';

const Podcasts: React.FC = () => {
    const dataSciencePodcasts = [
        {
            imgSrc: "https://i.iheart.com/v3/catalog/podcast/138780510?ops=fit(480%2C480)",
            title: "Federated Learning",
            description: "A podcast about federated learning",
            date: "10 Sep, 2024",
            duration: "3:16 min",
            audioSrc: "federated_learning_podcast.m4a"
        },
        {
            imgSrc: "https://i.iheart.com/v3/catalog/podcast/29319113?ops=fit(480%2C480)",
            title: "Transfer Learning",
            description: "Learn about transfer learning",
            date: "13 Sep, 2024",
            duration: "4:18 min",
            audioSrc: "transfer_learning_podcast.m4a"
        },
        // Add more podcast data here
    ];

    return (
        <AudioProvider>
            <main>
                <div className="container">
                    <h1>Our Podcasts</h1>
                    <PodcastCategory category="Data Science" podcasts={dataSciencePodcasts} />
                    <AudioPlayer />
                </div>
            </main>
        </AudioProvider>
    );
};

export default Podcasts;