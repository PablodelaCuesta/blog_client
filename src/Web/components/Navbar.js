import { useContext } from "react"
import { Link, } from "react-router-dom"
import { AuthContext } from "../../API/context/Auth/AuthContext"

import './Navbar.css'

// TODO: NavBar
/*
    * Búsqueda de entradas del blog mediante la lupa
    * Cambio de idioma
    * Modificar el enlace Admin por => Sign in / register para hacer el blog extensible a otros usos
    * Al identificarse abrir nuevas opciones de administración. Nuevo post, nuevas categorías, gestión de usuarios o comentarios
    * Quizás sería interesante una visualización de los logs del servidor
*/

const Navbar = () => {

    const { state, logout } = useContext(AuthContext)

    const signin = () => {


        if (state.jwt) {
            return (
                <div>
                    {/* <li className="nav-item">
                        <span className="nav-link active" style={{ color: "black" }} > Hola {state.name} ! </span>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/" onClick={logout} className="nav-link active" >Logout</Link>
                    </li>
                </div>

            )
        }
        else {
            return (
                <ul className="admin navbar-text">
                    <Link to="/login" className="active" >Admin</Link>
                </ul>
            )
        }
    }

    const editorLink = () => {
        return (
            <li className="nav-item">
                <Link to="/editor" className="nav-link active" >Editor</Link>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-md">
            <div id="search-area" className="search-area" style={{ display: "none" }}>
                <div className="search-area-inner d-flex align-items-center justify-content-center">

                    <div className="close-btn"><i onClick={() => { document.getElementById("search-area").style.display = 'none' }} className="far fa-times-circle"></i></div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <form action="#">
                                <div className="form-group">
                                    <input type="search" name="search" id="search" placeholder="What are you looking for?" />
                                    <button type="submit" className="submit"><i className="fas fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Pablo de la Cuesta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    </ul>

                    <div className="d-flex">
                        <div className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link active" >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active" >Contact</Link>
                            </li>
                            {
                                state.jwt
                                    ? editorLink()
                                    : ''
                            }

                            <div className="navbar-text">
                                <a className="search-btn">
                                    <i onClick={() => { document.getElementById("search-area").style.display = 'block' }} className="fas fa-search"></i>
                                </a>
                            </div>

                            {/* TODO: change language must to change all the language of the blog */}
                            <ul className="langs navbar-text">
                                <a className="active">EN</a>
                                <span>           </span>
                                <a>ES</a>
                            </ul>
                            {
                                signin()
                            }
                        </div>
                    </div>



                </div>
            </div>
        </nav>
    )
}

export default Navbar