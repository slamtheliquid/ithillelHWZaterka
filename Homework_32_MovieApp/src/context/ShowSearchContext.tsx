import { createContext, useContext, useState } from 'react';
import {ShowSearchContextType} from "../types/showSearch";
import {ShowSearchType} from "../types/show";

const ShowSearchContext = createContext<ShowSearchContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideShowSearch = (): ShowSearchContextType => {
    const [selectedItem, setSelectedItem] = useState<ShowSearchType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideShowSearch = ({ children }: any): JSX.Element => {
    const value = useProvideShowSearch();

    return (
        <ShowSearchContext.Provider value={value}>{ children }</ShowSearchContext.Provider>
    )
}

export const useShowSearchContext = () => {
    return useContext(ShowSearchContext);
}

