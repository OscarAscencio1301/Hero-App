import { useReducer } from "react"
import { InitialState, User, authReducer } from "../reducer/authReducer"
import { AuthContext } from "./Context"

interface PropsProvider {
    children: JSX.Element | JSX.Element
}

const inititalState: InitialState = {
    stateAuth: 'pending',
    user: null,
    error: null
}

const init = () => {
    const values = localStorage.getItem('auth')
    return {
        stateAuth: values ? 'login': 'logout',
        user: values ? JSON.parse(values) : null,
        error: null
        
    }
}

export const AuthProvider = ({ children }: PropsProvider) => {

    const [stateAuthValues, dispatch] = useReducer(authReducer, {inititalState}, init)

    const loginUser = (user: User) => {
        localStorage.setItem('auth', JSON.stringify(user))
        dispatch({
            type: 'Auth Login',
            payload: user
        })
    }


    const logoutUser = () => {
        localStorage.clear()
        dispatch({
            type: 'Auth Logout'
        })
    }


    return (
        <AuthContext.Provider value={{
            stateAuthValues,
            loginUser,
            logoutUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}