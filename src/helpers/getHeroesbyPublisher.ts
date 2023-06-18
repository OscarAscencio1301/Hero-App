import { heroes } from "../pages/heroes/data/heroesData"

export enum Publisher {
    marvel = 'Marvel Comics',
    dc = 'DC Comics'
}

export const getHeroesbyPusblisher = (publisher: Publisher) => {

    return heroes.filter(heroe => heroe.publisher === publisher)
}

