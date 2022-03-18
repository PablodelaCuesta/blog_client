import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../API/context/Auth/AuthContext"
import { BASE } from "../../Core/constants/connections"

// TODO: Edición y borrado para administradores
    // TODO: Edición de un post desde dentro de un post
    // TODO: Borrado de un post desde dentro de un post

const Post = ({ values: { uid, title, image = "img/default.jpg" }, latest }) => {

    const { state } = useContext(AuthContext)

    const editAndRemove = () => {
        return (
            <>
                <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>
                        <Link to={'/editor/' + uid}><i className="fas fa-edit"></i></Link>
                    </small>
                </li>
                <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>
                        <Link to={'/editor/' + uid}><i className="fas fa-trash-alt"></i></Link>
                    </small>
                </li>
            </>
        )
    }


    const regularPost = () => {
        return (
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url('${BASE}/${image}')` }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                            <Link className="text-white" to={'/blog/' + uid}>{title}</Link>
                        </h2>

                        <ul className="d-flex list-unstyled mt-auto">
                            {
                                state.logged ? editAndRemove() : 'No estoy logeado'
                            }
                            <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em"></svg>
                                <small>3d</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const latestPost = () => {
        return (
            <Link to={`/blog/${uid}`}>
                <div className="item d-flex align-items-center">
                    <div className="image"><img src={`${BASE}/${image}`} alt="No image" className="img-fluid" /></div>
                    <div className="title"><strong>{title}</strong>
                        <div className="d-flex align-items-center">
                            <div className="views"><i className="icon-eye"></i> 500</div>
                            <div className="comments"><i className="icon-comment"></i>12</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return (

        <>
            {
                latest ? regularPost() : latestPost()
            }
        </>

    )
}


export default Post