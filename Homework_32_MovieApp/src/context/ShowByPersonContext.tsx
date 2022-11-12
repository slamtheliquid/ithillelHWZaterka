import { createContext, useContext, useState } from 'react';
import {ShowByPersonContextType} from "../types/showByPersonContext";
import {ShowByPersonType} from "../types/show";


const ShowByPersonContext = createContext<ShowByPersonContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideShowByPerson = (): ShowByPersonContextType => {
    const [selectedItem, setSelectedItem] = useState<ShowByPersonType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideShowByPerson = ({ children }: any): JSX.Element => {
    const value = useProvideShowByPerson();

    return (
        <ShowByPersonContext.Provider value={value}>{ children }</ShowByPersonContext.Provider>
    )
}

export const useShowByPersonContext = () => {
    return useContext(ShowByPersonContext);
}

