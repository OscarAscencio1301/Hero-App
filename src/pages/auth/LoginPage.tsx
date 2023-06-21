import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const LoginPage = () => {
    const navigate = useNavigate()
    const {loginUser} = useAuth()


    const signIn = () => {
        navigate('/', {
            replace: true
        })
        loginUser({
          id: 1234,
          username: 'oscae'
        })
    }

  return (
    <div className="container mt-5">
        <h1>login</h1>
        <button className="btn btn-primary" onClick={signIn}>Login</button>
    </div>
  )
}

export default LoginPage
