import { Routes, Route, Navigate } from "react-router-dom"
import Marvel from "../heroes/pages/Marvel"
import DC from "../heroes/pages/DC"
import Login from "../auth/pages/Login"


export default function AppRouter() {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="marvel" element={<Marvel />} />
            <Route path="dc" element={<DC />} />
            <Route path='/' element={<Navigate to="/login"/>}/>
            
        </Routes>
    </>
  )
}
