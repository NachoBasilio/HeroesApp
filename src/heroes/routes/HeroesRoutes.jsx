import { Navbar } from "../../ui/components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom"
import Marvel from "../pages/Marvel";
import DC from "../pages/DC";
import Search from "../pages/Search";
import Hero from "../pages/Hero";


export default function HeroesRoutes() {
  return (
    <>
        <Navbar></Navbar>

        <div className="container">
            <Routes>

                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<DC />} />
                <Route path="search" element={<Search/>} />
                <Route path="hero" element={<Hero />} />


                <Route path='/' element={<Navigate to="/marvel"/>}/>
                
            </Routes>   

        </div>
    </>
  )
}
