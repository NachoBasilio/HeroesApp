import authReducer from "../auth/context/authReducer";
import types  from "../auth/types/types";

describe('Pruebas en authReducer', () => {
    test("debe de retornar el estado por defecto", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    })
    test("debe de loguear y colocar el name del usuario", () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan'
            }
        }
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, user: {name: "Juan"} });
    })
    test("debe de borrar el name del usuario y logged en false", () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({ logged: true, user: {name: "Juan"} }, action);
        expect(state).toEqual({ logged: false, user: null });
    })
})