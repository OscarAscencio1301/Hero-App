import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const PrivateRoutes = ({children}:{children: React.ReactElement}) => {

    const {stateAuthValues} = useAuth()

  return stateAuthValues.stateAuth === 'login' ? children : <Navigate to={'/auth'}/>
}

export default PrivateRoutes
