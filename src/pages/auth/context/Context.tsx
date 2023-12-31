import { createContext } from "react";
import { InitialState, User } from "../reducer/authReducer";

export interface PropsContext {
    stateAuthValues: InitialState,
    loginUser: (user:User) => void,
    logoutUser: () => void
}


export const AuthContext = createContext<PropsContext>({} as PropsContext)