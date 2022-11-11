import { createContext, useContext, useState } from 'react';
import {EpisodesType} from "../types/episode";
import {EpisodeContextType} from "../types/episodeContext";

const EpisodeContext = createContext<EpisodeContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideEpisode = (): EpisodeContextType => {
    const [selectedItem, setSelectedItem] = useState<EpisodesType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideEpisode = ({ children }: any): JSX.Element => {
    const value = useProvideEpisode();

    return (
        <EpisodeContext.Provider value={value}>{ children }</EpisodeContext.Provider>
    )
}

export const useEpisodeContext = () => {
    return useContext(EpisodeContext);
}

