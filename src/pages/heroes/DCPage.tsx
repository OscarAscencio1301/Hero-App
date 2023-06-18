import HeroeList from "../../components/HeroeList"
import { Publisher } from "../../helpers/getHeroesbyPublisher"


const DCPage = () => {


  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroeList publisher={Publisher.dc}/>
    </>
  )
}

export default DCPage
