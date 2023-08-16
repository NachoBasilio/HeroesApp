import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function HeroCard({hero}) {
  const heroImageUrl = `/heroes/${ hero.id }.jpg`;
  return (
    <div
    className="col animate__animated animate__fadeIn"

    >
        <div className="card">

        <div className="card-body">
            <img src={heroImageUrl} className="card-img-top" alt={hero.superhero} />
            <h5 className="card-title">{hero.superhero}</h5>
            <p className="card-text">{hero.alter_ego}</p>
            {
            (hero.alter_ego !== hero.characters)
            && <p className="card-text">{hero.characters}</p>
            }
            <p className="card-text">
            <small className="text-muted">{hero.first_appearance}</small>
            </p>
            <Link to={'/hero/'+hero.id}>
            Más...
            </Link>
        </div>
        </div>
    </div>
  )
}

HeroCard.propTypes = { 
    hero: PropTypes.object.isRequired
}
