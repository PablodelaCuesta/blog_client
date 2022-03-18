

import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../API/context/Auth/AuthContext"

import "./Login.css"

const Login = () => {

    // Local state
    const [auth, setAuth] = useState({
        email: '',
        password: ''
    })
    const [ errors, setErrors ] = useState({})
    const navigate = useNavigate()

    // Global state from context
    const { login } = useContext(AuthContext)

    // handlers
    const handleChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (validate()) {
            const resp = await login(auth)

            if (!resp) {                
                setErrors({
                    email: false,
                    password: false
                })
            }
            else {
                navigate("/")
            }
        }
    }

    // helpers
    const applyErrorClass = (field) => ( ( field in errors && errors[field] == false) ? ' invalid-field' : '')
    const validate = () => {
        let temp = {}
        temp.email = auth.email == "" ? false : true
        temp.password = auth.password == "" ? false : true
        setErrors(temp)

        return Object.values(temp).every( element => element == true )
    }

    return (
        <div className="form-signin">
            <form onSubmit={handleSubmit}>

                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating mb-3">
                    <input type="email" autoComplete="off" className={"form-control" + applyErrorClass('email')} id="floatingInput" name="email" placeholder="name@example.com" value={auth.email} onChange={handleChange} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" autoComplete="off" className={"form-control" + applyErrorClass('password')} id="floatingPassword" name="password" placeholder="Password" value={auth.password} onChange={handleChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    )
}


export default Login