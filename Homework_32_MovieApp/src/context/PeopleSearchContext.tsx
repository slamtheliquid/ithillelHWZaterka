import { createContext, useContext, useState } from 'react';
import {PeopleSearchContextType} from "../types/peopleSearch";
import {PeopleSearchType} from "../types/people";

const PeopleSearchContext = createContext<PeopleSearchContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvidePeopleSearch = (): PeopleSearchContextType => {
    const [selectedItem, setSelectedItem] = useState<PeopleSearchType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvidePeopleSearch = ({ children }: any): JSX.Element => {
    const value = useProvidePeopleSearch();

    return (
        <PeopleSearchContext.Provider value={value}>{ children }</PeopleSearchContext.Provider>
    )
}

export const usePeopleSearchContext = () => {
    return useContext(PeopleSearchContext);
}

