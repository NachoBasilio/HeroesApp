import { Navigate, useNavigate, useParams } from "react-router-dom"
import getHeroByID from "../helpers/getHeroByID"
import { useMemo } from "react"

export default function Hero() {
  const { id } = useParams()

  const heroe = getHeroByID(id)
  

  const navigate = useNavigate()


  const handleReturn = () => {
    navigate(-1)
  }


  if (!heroe) {
    return <Navigate to="/"/>
  }

  return (
    <>
      <div className="row">
        <div className="col-4">
          <img src={`../assets/heroes/${id}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={heroe.superhero} />
        </div>
        <div className="col-8">
          <h3>{heroe.superhero}</h3>
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b>{heroe.alter_ego}</li>
            {
              (heroe.alter_ego !== heroe.characters)
              && <li className="list-group-item"><b>Another alter egos:</b> {heroe.characters}</li>
            }
            <li className="list-group-item"><b>Publisher: </b>{heroe.publisher}</li>
            <li className="list-group-item"><b>First appearance: </b>{heroe.first_appearance}</li>
          </ul>
          <button 
          className="btn btn-outline-primary" 
          onClick={handleReturn}
          >
            Regresar
          </button>
        </div>

      </div>
    </>
  )
}
