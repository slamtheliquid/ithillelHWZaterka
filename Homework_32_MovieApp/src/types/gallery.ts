export type GalleryType = {
    id: number,
    main: boolean,
    resolutions: {
        medium: {height: number, url: string, width: number}
        original: {height: number, url: string, width: number}
    },
    type: string
}