import {ShowType} from './show';

export type ShowContextType = {
    selectedItem: ShowType | null;
    setSelectedItem: (item: ShowType) => void;
}