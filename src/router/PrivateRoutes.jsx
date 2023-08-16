
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'


export default function PrivateRoutes({children}) {
    const {state} = useContext(AuthContext)


  return (state.logged) ? children : <Navigate to="/login"/>
}

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}
