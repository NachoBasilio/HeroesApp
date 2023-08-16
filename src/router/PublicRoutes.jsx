import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PublicRoutes({children}) {

    const {state} = useContext(AuthContext)

  return(!state.logged) ? children : <Navigate to="/marvel"/>
}

PublicRoutes.propTypes = {
    children: PropTypes.node.isRequired
}