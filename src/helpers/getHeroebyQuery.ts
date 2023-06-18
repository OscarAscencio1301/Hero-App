import { heroes } from "../pages/heroes/data/heroesData"

export const getHeoresbyQuery = (query?: string) => {
    if(!query) return
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(query.toLowerCase())) || []
}