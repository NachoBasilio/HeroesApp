import types from "../auth/types/types";

describe('Pruebas en types', () => {
    test("El testo de los types debe ser la correcta", ()=>{
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        }
        )
    })
})