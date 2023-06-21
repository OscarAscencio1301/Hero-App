import { TypesAuth } from "../../../types/auth"

export interface User {
    id: number,
    username: string
}

export interface InitialState {
    stateAuth: string
    user: User | null,
    error: string | null
}

export const authReducer = (state: InitialState, action: TypesAuth) => {
    switch (action.type) {
        case 'Auth Login':
            return {
                ...state,
                stateAuth: 'login',
                user: action.payload
            }
        case 'Auth Logout':
            return {
                ...state,
                stateAuth: 'logout',
                user: null
            }

        default:
            return state;
    }
}