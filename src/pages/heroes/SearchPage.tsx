import { FormEvent, useMemo } from "react"
import useForm from "../../hooks/useForm"
import { useSearchParams } from "react-router-dom"
import { getHeoresbyQuery } from "../../helpers/getHeroebyQuery"
import HeroeCard from "../../components/HeroeCard"


const SearchPage = () => {
  const [searchParams, setsearchParams] = useSearchParams()

  const { search, changeValues } = useForm({
    search: ''
  })


  const sendFormSearch = (e: FormEvent) => {
    e.preventDefault()

    if (search.trim().length < 1) return

    setsearchParams({ q: search.toString() })


  }


  const query = searchParams.get('q')
  const heroes = useMemo(() => getHeoresbyQuery(query?.toString()), [query])




  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={sendFormSearch}>
            <input type="text" placeholder="Search Hero" className="form-control" name="search" autoComplete="off" value={search} onChange={changeValues} />
            <button type="submit" className="btn mt-2 btn-primary">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            heroes?.map(heroe => <HeroeCard {...heroe} key={heroe.id} />)
          }
        </div>
      </div>
    </>
  )
}


export default SearchPage
