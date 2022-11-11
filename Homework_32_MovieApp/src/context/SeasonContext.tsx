import { createContext, useContext, useState } from 'react';
import {SeasonType} from "../types/season";
import {SeasonContextType} from "../types/seasonContext";

const SeasonContext = createContext<SeasonContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideSeason = (): SeasonContextType => {
    const [selectedItem, setSelectedItem] = useState<SeasonType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideSeason = ({ children }: any): JSX.Element => {
    const value = useProvideSeason();

    return (
        <SeasonContext.Provider value={value}>{ children }</SeasonContext.Provider>
    )
}

export const useSeasonContext = () => {
    return useContext(SeasonContext);
}

