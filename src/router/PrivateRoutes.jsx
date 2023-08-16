
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'


export default function PrivateRoutes({children}) {
    const {state} = useContext(AuthContext)
    const {pathname, search} = useLocation()

    const lastPath = `${pathname}${search}`
    localStorage.setItem('lastPath', lastPath)

  return (state.logged) ? children : <Navigate to="/login"/>
}

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}
