export type PeopleType = {
    birthday: string,
    country: { code: string, name: string, timezone: string },
    deathday: string|null,
    gender: string,
    id: number,
    image: { medium: string, original: string },
    name: string,
    updated: number,
    url: string,
    links: {self: {href: string}}
}
export type PeopleSearchType = {
    person: PeopleType,
    score: number
}