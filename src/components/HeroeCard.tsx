import { Link } from "react-router-dom"
import { Heroe } from "../interfaces/Heroe"


const HeroeCard = ({ alter_ego, first_appearance, characters, id, superhero }: Heroe) => {

    const heroeImage = `./assets/heroes/${id}.jpg`

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroeImage} alt="Photo" className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            <Characters characters={characters} alter_ego={alter_ego} />
                            <p className="card-text"><small className="text-muted">{first_appearance}
                            </small> </p>

                            <Link to={`/heroe/${id}`}>Más...</Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Characters = ({ alter_ego, characters }: { characters: string, alter_ego: string }) => {
    return (
        alter_ego !== characters && <p>{characters}</p>
    )
}


export default HeroeCard
