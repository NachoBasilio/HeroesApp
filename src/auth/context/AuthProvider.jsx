import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from 'prop-types';
import authReducer from "./authReducer";
import types from "../types/types";

const initialState = {
    logged: false,
    user: null,
}
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return{
        logged: !!user,
        user: user
    }
}

export default function AuthProvider({children}) {
    const [state, dispatch] = useReducer(authReducer, initialState, init)

    const onLogin = (name="") => {
        const user ={
            id: "ABC",
            name
        }

        const action = {
            type: types.login,
            payload: {
                ...user
            }
        }
        
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
        state,
        login: onLogin
    }}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
