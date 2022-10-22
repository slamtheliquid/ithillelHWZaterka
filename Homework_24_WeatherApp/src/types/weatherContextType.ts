import {WeatherType} from "./weatherType";

export type WeatherContextType = {
    selectedItem: WeatherType | null,
    setSelectedItem: (item: WeatherType) => void
}