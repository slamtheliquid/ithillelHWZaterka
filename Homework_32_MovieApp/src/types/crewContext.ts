import {CrewType} from "./crew";

export type CrewContextType = {
    selectedItem: CrewType | null;
    setSelectedItem: (item: CrewType) => void;
}