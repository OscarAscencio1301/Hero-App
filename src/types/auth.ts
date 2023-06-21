import { User } from "../pages/auth/reducer/authReducer"

export type TypesAuth =
    {
        type: 'Auth Login',
        payload: User
    }

    |

    {
        type: 'Auth Logout'
    }