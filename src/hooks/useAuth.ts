import { useContext } from "react"
import { AuthContext } from "../pages/auth/context/Context"


const useAuth = () => {

    const { stateAuthValues, loginUser, logoutUser } = useContext(AuthContext)

    return {
        stateAuthValues,
        loginUser,
        logoutUser
    }
}

export default useAuth
