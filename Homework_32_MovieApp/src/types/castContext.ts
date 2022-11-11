import {CastType} from "./cast";

export type CastContextType = {
    selectedItem: CastType | null;
    setSelectedItem: (item: CastType) => void;
}