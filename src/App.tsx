import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"
import { AuthProvider } from "./pages/auth/context/Provider"


const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
