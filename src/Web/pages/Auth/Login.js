import { useContext } from "react"
import { useState } from "react/cjs/react.development"
import { AuthContext } from "../../../API/context/Auth/AuthContext"

const Login = () => {

    // Local state
    const [auth, setAuth] = useState({
        email: '',
        password: ''
    })

    // Global state from context
    const { login } = useContext(AuthContext)

    // handlers
    const handleChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login(auth)
    }

    return (
        <div className="form-signin">
            <form onSubmit={handleSubmit}>

                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={auth.email} onChange={handleChange} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={auth.password} onChange={handleChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                {/* <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div> */}
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </div>
    )
}


export default Login