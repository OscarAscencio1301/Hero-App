import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const PublicRoutes = ({ children }: { children: React.ReactElement }) => {

    const { stateAuthValues } = useAuth()

    return stateAuthValues.stateAuth === 'login' ? <Navigate to={'/*'} /> : children;

}

export default PublicRoutes
