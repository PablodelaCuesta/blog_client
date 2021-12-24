import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/Auth/AuthContext"

const Navbar = () => {

    const {} = useContext(AuthContext)

    const signin = () => {

    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Pablo de la Cuesta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link active" >Blog</Link>
                        </li>
                    </ul>
                    <div className="d-flex navbar-nav">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active" >Admin</Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar