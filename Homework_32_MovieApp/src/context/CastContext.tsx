import { createContext, useContext, useState } from 'react';
import {CastContextType} from "../types/castContext";
import {CastType} from "../types/cast";

const CastContext = createContext<CastContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideCast = (): CastContextType => {
    const [selectedItem, setSelectedItem] = useState<CastType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideCast = ({ children }: any): JSX.Element => {
    const value = useProvideCast();

    return (
        <CastContext.Provider value={value}>{ children }</CastContext.Provider>
    )
}

export const useCastContext = () => {
    return useContext(CastContext);
}

