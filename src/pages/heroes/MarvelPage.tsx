import HeroeList from "../../components/HeroeList"
import { Publisher } from "../../helpers/getHeroesbyPublisher"


const MarvelPage = () => {
  return (
    <>
    <h1 className="animate__animated animate__bounce">Marvel Comics</h1>
    <hr />

   <HeroeList publisher={Publisher.marvel}/>
  </>
  )
}

export default MarvelPage
