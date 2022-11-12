import {ShowByPersonType} from "./show";

export type ShowByPersonContextType = {
    selectedItem: ShowByPersonType | null;
    setSelectedItem: (item: ShowByPersonType) => void;
}