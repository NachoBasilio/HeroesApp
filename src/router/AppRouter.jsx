import { Routes, Route } from "react-router-dom"

import Login from "../auth/pages/Login"
import HeroesRoutes from "../heroes/routes/HeroesRoutes"




export default function AppRouter() {
  return (
    <>

        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<HeroesRoutes />} />

        </Routes>
    </>
  )
}
