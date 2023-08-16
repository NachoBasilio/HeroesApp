import { Routes, Route } from "react-router-dom"

import Login from "../auth/pages/Login"
import HeroesRoutes from "../heroes/routes/HeroesRoutes"
import PrivateRoutes from "./PrivateRoutes"




export default function AppRouter() {
  return (
    <>

        <Routes>
            <Route path="login" element={<Login />} />

            <Route path="/*" element={
              <PrivateRoutes>
                <HeroesRoutes />
              </PrivateRoutes>
            }/>


        </Routes>
    </>
  )
}
