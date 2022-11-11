import { createContext, useContext, useState } from 'react';
import {CrewContextType} from "../types/crewContext";
import {CrewType} from "../types/crew";

const CrewContext = createContext<CrewContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideCrew = (): CrewContextType => {
    const [selectedItem, setSelectedItem] = useState<CrewType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideCrew = ({ children }: any): JSX.Element => {
    const value = useProvideCrew();

    return (
        <CrewContext.Provider value={value}>{ children }</CrewContext.Provider>
    )
}

export const useCrewContext = () => {
    return useContext(CrewContext);
}

