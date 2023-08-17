import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import PublicRoutes from "../router/PublicRoutes";
import {render, screen} from "@testing-library/react";

describe("PublicRoutes", () => {
    test("Si no estoy auntenticado debe mostrar el children", () => {
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={{logged:false}}>
                <PublicRoutes>
                    <span>Children</span>
                </PublicRoutes>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Children")).toBeTruthy();
    })
    test('debe de navegar si está autenticado', () => { 

        
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoutes>
                                <h1>Ruta pública</h1>
                            </PublicRoutes>
                        } />
                        <Route path='marvel' element={ <h1>Página Marvel</h1> } />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página Marvel') ).toBeTruthy();


    })
})