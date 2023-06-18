import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate()

    const signIn = () => {
        navigate('/', {
            replace: true
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
