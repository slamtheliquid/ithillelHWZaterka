import { createContext, useContext, useState } from 'react';
import {ShowType} from 'types/show';
import {ShowContextType} from '../types/showContext';
import {EpisodesType} from "../types/episode";
import {SeasonType} from "../types/season";
import {CastType} from "../types/cast";
import {CrewType} from "../types/crew";
import {GalleryType} from "../types/gallery";

const ShowContext = createContext<ShowContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideShow = (): ShowContextType => {
    const [selectedItem, setSelectedItem] = useState<ShowType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideShow = ({ children }: any): JSX.Element => {
    const value = useProvideShow();

    return (
        <ShowContext.Provider value={value}>{ children }</ShowContext.Provider>
    )
}

export const useShowContext = () => {
    return useContext(ShowContext);
}

