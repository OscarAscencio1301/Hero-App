import { useMemo } from "react"
import { Publisher, getHeroesbyPusblisher } from "../helpers/getHeroesbyPublisher"
import HeroeCard from "./HeroeCard"


const HeroeList = ({ publisher }: { publisher: Publisher }) => {

    const heroes = useMemo(() => getHeroesbyPusblisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">

            {
                heroes.map(heroe => <HeroeCard key={heroe.id} {...heroe} />)
            }

        </div>
    )
}

export default HeroeList
