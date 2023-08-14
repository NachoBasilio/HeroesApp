import { Navbar } from "../../ui/components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom"


import Search from "../pages/Search";
import Hero from "../pages/Hero";
import Heroes from "../pages/Heroes";


export default function HeroesRoutes() {
  return (
    <>
        <Navbar></Navbar>

        <div className="container">
            <Routes>

                <Route path="marvel" element={<Heroes publisher="Marvel Comics"/>} />
                <Route path="dc" element={<Heroes publisher="DC Comics"/>} />
                <Route path="search" element={<Search/>} />
                <Route path="hero/:id" element={<Hero />} />


                <Route path='/' element={<Navigate to="/marvel"/>}/>
                
            </Routes>   

        </div>
    </>
  )
}
