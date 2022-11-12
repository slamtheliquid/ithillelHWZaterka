import { createContext, useContext, useState } from 'react';
import {GalleryContextType} from "../types/galleyContext";
import {GalleryType} from "../types/gallery";

const GalleryContext = createContext<GalleryContextType>({
    selectedItem: null,
    setSelectedItem: () => {}
});

const useProvideGallery = (): GalleryContextType => {
    const [selectedItem, setSelectedItem] = useState<GalleryType | null>(null);

    return {
        selectedItem,
        setSelectedItem
    }
}

export const ProvideGallery = ({ children }: any): JSX.Element => {
    const value = useProvideGallery();

    return (
        <GalleryContext.Provider value={value}>{ children }</GalleryContext.Provider>
    )
}

export const useGalleryContext = () => {
    return useContext(GalleryContext);
}

