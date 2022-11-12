import {SeasonType} from "./season";

export type SeasonContextType = {
    selectedItem: SeasonType | null;
    setSelectedItem: (item: SeasonType) => void;
}