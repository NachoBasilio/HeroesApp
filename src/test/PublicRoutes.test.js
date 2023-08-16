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
})