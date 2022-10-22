import React, {useContext, useState} from 'react';
import {WeatherType} from "../types/weatherType";
import {WeatherContextType} from "../types/weatherContextType";

export const WeatherContext = React.createContext<WeatherContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideCharacter = () => {
    const [selectedItem, setSelectedItem] = useState<WeatherType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideCharacter =  ( { children } : any ) : JSX.Element => {
    const value = useProvideCharacter();

    return (
        <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
    )
}

export const useWeatherContext = () => {
    return useContext(WeatherContext);
}