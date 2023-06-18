import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroesbyId } from "../../helpers/getHeoresbyId"
import { useMemo } from "react"


const HeroePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const heroe = useMemo(() => getHeroesbyId(id || ''), [id])

  if (!heroe) {
    return (
      <Navigate to={'/'} />
    )
  } 
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg`} alt="Heroe" className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{heroe.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{heroe.publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{heroe.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{heroe.characters}</p>
        <button className="btn btn-primary" onClick={goBack}>Regresar</button>
      </div>

    </div>
  )
}

export default HeroePage
