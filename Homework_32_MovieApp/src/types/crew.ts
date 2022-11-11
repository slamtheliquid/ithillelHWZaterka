export type CrewType = {
    person: {
        birthday: string|number|null,
        country: string|null,
        deathday: string|number|null,
        gender: string|null,
        id: number,
        image: {medium: string, original: string},
        name: string,
        updated: number,
        url: string,
        links: {self: string}
    },
    type: string
}