import {EpisodesType} from "./episode";

export type EpisodeContextType = {
    selectedItem: EpisodesType | null;
    setSelectedItem: (item: EpisodesType) => void;
}