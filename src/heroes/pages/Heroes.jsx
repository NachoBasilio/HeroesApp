import HeroCard from "../components/HeroCard"
import getHeroesByPublisher from "../helpers/getHeroesByPublisher"
import PropTypes from 'prop-types'

export default function Heroes({publisher}) {
  const arrayHeroes = getHeroesByPublisher(publisher)

  return (
    <>
      <h1>Heroes de {publisher}</h1>
      <hr />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          arrayHeroes.map(hero => (
              <HeroCard key={hero.id} hero={hero}></HeroCard>
          ))
        }
      </div>

    </>
  )
}

Heroes.propTypes = {
  publisher: PropTypes.string.isRequired
}
