export type EpisodesType = {
    airDate: string,
    airStamp: string,
    airtime: string,
    id: number,
    image: {medium: string, original: string},
    name: string,
    number: number,
    rating: {average: string|number|null},
    runtime: number,
    season: number,
    summary: string,
    type: string,
    url: string,
    links: {self:{href: string}}
}