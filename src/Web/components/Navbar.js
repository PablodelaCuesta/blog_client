import { useContext, useState } from "react"
import { Link, } from "react-router-dom"
import { AuthContext } from "../../API/context/Auth/AuthContext"
import { GlobalContext } from "../../API/context/global/GlobalContext"
import { types } from "../../API/context/global/types"

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
    const { globalState, changeLanguage } = useContext(GlobalContext)

    const [active, setActive] = useState(true)

    const signin = () => {


        if (state.jwt) {
            return (
                <div>
                    {/* <li className="nav-item">
                        <span className="nav-link active" style={{ color: "black" }} > Hola {state.name} ! </span>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/" onClick={logout} className="nav-link" >Logout</Link>
                    </li>
                </div>

            )
        }
        else {
            return (
                <li className="nav-item">
                    <Link to="/login" className="nav-link" >Admin</Link>
                </li>
            )
        }
    }

    const editorLink = () => {
        return (
            <li className="nav-item">
                <Link to="/editor" className="nav-link" >Editor</Link>
            </li>
        )
    }

    const handleLanguage = (self) => {
        changeLanguage(self.target.value)

        if (self.target.value == types.language.EN) {
            document.getElementById(types.language.EN).className = "nav-link btn " + applyClassName(true)
            document.getElementById(types.language.ES).className = "nav-link btn " + applyClassName(false)
        }
        else {
            document.getElementById(types.language.EN).className = "nav-link btn " + applyClassName(false)
            document.getElementById(types.language.ES).className = "nav-link btn " + applyClassName(true)

        }


    }
    const applyClassName = (apply) => apply ? "active" : ""

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Pablo de la Cuesta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    </ul>

                    <div className="d-flex">
                        <div className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link" >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                            {
                                state.jwt
                                    ? editorLink()
                                    : ''
                            }


                            {/* TODO: change language must to change all the language of the blog */}
                            <li className="nav-item">
                                <button id={types.language.ES} onClick={handleLanguage} className={`nav-link btn active`} value={types.language.ES}>ES</button>
                            </li>
                            <li className="nav-item">
                                <button id={types.language.EN} onClick={handleLanguage} className={`nav-link btn`} value={types.language.EN}>EN</button>
                            </li>

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