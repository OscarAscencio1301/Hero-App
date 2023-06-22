import {InitialState, User, authReducer} from '../../../../src/pages/auth/reducer/authReducer'


describe('Testing authReducer', () => {
    const initialSate:InitialState = {
        stateAuth: 'pending',
        user: null,
        error: null
    }

    const user: User = {
        id: 123,
        username: 'oscar perez'
    }

    test('Testing initial State ', () => {
        const valueSate = authReducer(initialSate, {type: 'Auth Test'})
        expect(valueSate).toEqual(initialSate)
    
    })

    test('Login AuthReducer ', () => {
        const valueSate = authReducer(initialSate, {type: 'Auth Login', payload: user})
        expect(valueSate.user).toEqual(user)
    
    })

    test('Logout AuthReducer ', () => {
        const valueSate = authReducer(initialSate, {type: 'Auth Logout'})
        expect(valueSate.stateAuth).toBe('logout')
    
    })

})