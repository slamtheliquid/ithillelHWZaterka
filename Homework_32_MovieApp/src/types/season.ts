export type SeasonType = {
    endDate: string,
    episodeOrder: number,
    id: number,
    image: {medium: string, original: string} | null,
    network: {
        country: {code: string, name: string, timezone: string},
        id: number,
        name: string,
        officialSite: string|null
    },
    number: number,
    premiereDate: string,
    summary: string|null,
    url: string,
    webChannel: {
        country: {code: string, name: string, timezone: string},
        id: number,
        name: string,
        officialSite: string|null
    }|null,
    links: {self:{href: string}}
}