import {ShowSearchType} from "./show";

export type ShowSearchContextType = {
    selectedItem: ShowSearchType | null;
    setSelectedItem: (item: ShowSearchType) => void;
}