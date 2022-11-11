import {GalleryType} from "./gallery";

export type GalleryContextType = {
    selectedItem: GalleryType | null;
    setSelectedItem: (item: GalleryType) => void;
}