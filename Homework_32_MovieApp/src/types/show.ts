export type ShowType = {
    averageRuntime: number,
    dvdCountry: string|null,
    ended: string,
    externals: {imdb: string, thetvdb: number, tvrage: number},
    genres: string[],
    id: number,
    image: {medium: string, original: string},
    language: string,
    name: string,
    network: {
        country: {code: string, name: string, timezone: string},
        id: number,
        name: string,
        officialSite: string|null
    },
    officialSite: string,
    premiered: string,
    rating: {average:number|string|null},
    runtime: number,
    schedule: {days: string[], time: string},
    status: string,
    summary: string,
    type: string,
    updated: number,
    url: string,
    webChannel: {
        country: {code: string, name: string, timezone: string},
        id: number,
        name: string,
        officialSite: string|null
    },
    weight: number,
    links: {
        previousEpisode: {href: string},
        self: {href: string}
    }
}
export type ShowSearchType = {
    score: number,
    show: ShowType
}
export type ShowByPersonType = {
    self: boolean,
    voice: boolean,
    _embedded: { show: ShowType },
    _links:{ character: { href: string }, show: { href: string } }
}