import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import HeroCard from "../components/HeroCard";
import useForm from "../hooks/useForm";
import getHeroesByName from "../helpers/getHeroesByName";


export default function Search() {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ""} = queryString.parse(location.search)
  const heroesFiltrados = getHeroesByName(q)

  const {searchText, onInputChange} = useForm({
    searchText: q || ''
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if(searchText.trim().length < 2) return

    navigate(`?q=${searchText.toLowerCase().trim()}`)

  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form action=""
          onSubmit={onSearchSubmit}
          >
            <input 
            type="text" 
            placeholder="Find your hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
            />
            <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />


          {
           ( heroesFiltrados.length === 0 && q == '') &&
            <div className="alert alert-info">
              Search a hero
            </div>
          }

          {
            (q.length > 1 && heroesFiltrados.length === 0) &&
            <div className="alert alert-danger">
              There is no a hero with {q}
            </div>
          }

          {
            heroesFiltrados.map(hero => (
              <HeroCard
              key={hero.id}
              hero = {hero}
              />
            ))
          }

        </div>
      </div>
      </>
  )
}
