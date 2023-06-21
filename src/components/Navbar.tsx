import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


export const Navbar = () => {
    const navigate = useNavigate()
    const { stateAuthValues, logoutUser } = useAuth()

    const logout = () => {
        navigate('/login', {
            replace: true
        })
        logoutUser()
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Heroés
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={(props) => `nav-item nav-link ${props.isActive && 'active'}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={(props) => `nav-item nav-link ${props.isActive && 'active'}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={(props) => `nav-item nav-link ${props.isActive && 'active'}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>{stateAuthValues.user?.username}</span>
                    <button onClick={logout} className="btn nav-item nav-link">Logout</button>
                </ul>
            </div>
        </nav>
    )
}