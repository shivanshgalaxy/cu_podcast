import React, { useState } from 'react';
import PodcastCategory from '../components/PodcastCategory';
import '../App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface Podcast {
    imgSrc: string;
    title: string;
    description: string;
    date: string;
    duration: string;
    audioSrc: string;
}

const Podcasts: React.FC = () => {
    const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);

    const dataSciencePodcasts: Podcast[] = [
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
        <main>
            <div className="container">
                <h1>Our Podcasts</h1>
                <PodcastCategory
                    category="Data Science"
                    podcasts={dataSciencePodcasts}
                    onPodcastSelect={setCurrentPodcast}
                />
                {currentPodcast && (
                    <div className="audio-player-container">
                        <AudioPlayer
                            src={currentPodcast.audioSrc}
                            autoPlay
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            showJumpControls={false}
                        />
                    </div>
                )}
            </div>
        </main>
    );
};

export default Podcasts;
