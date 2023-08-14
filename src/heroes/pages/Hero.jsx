import { useParams } from "react-router-dom"

export default function Hero() {
  const params = useParams()
  console.log(params.id)

  return (
    <div>Hero</div>
  )
}
