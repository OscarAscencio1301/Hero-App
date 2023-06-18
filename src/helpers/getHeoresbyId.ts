import { heroes } from "../pages/heroes/data/heroesData"

export const getHeroesbyId = (id:string) => {
    return heroes.find(heroe => heroe.id === id)

}