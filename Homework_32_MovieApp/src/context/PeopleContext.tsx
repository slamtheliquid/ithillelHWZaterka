import { createContext, useContext, useState } from 'react';
import {PeopleType} from "../types/people";
import {PeopleContextType} from "../types/peopleContext";

const PeopleContext = createContext<PeopleContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvidePeople = (): PeopleContextType => {
    const [selectedItem, setSelectedItem] = useState<PeopleType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvidePeople = ({ children }: any): JSX.Element => {
    const value = useProvidePeople();

    return (
        <PeopleContext.Provider value={value}>{ children }</PeopleContext.Provider>
    )
}

export const usePeopleContext = () => {
    return useContext(PeopleContext);
}

