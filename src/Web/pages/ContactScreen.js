import { Navigate, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { sendEmail } from "../../API/controllers/sendEmail"
import { useFormValidation } from "../../API/hooks/useFormValidation"

const initialValue = {
    name: {
        value: '',
        validation: {
            required: true
        }
    },

    email: {
        value: '',
        validation: {
            required: true,
            pattern: ''
        }
    },

    subject: {
        value: '',
        validation: {
            required: true
        }
    },

    message: {
        value: '',
        validation: {
            required: true,
        }
    }
}



export const ContactScreen = (  ) => {
    let navigate = useNavigate();
    const mySwal = withReactContent(Swal);
    const [ values, handleInputChange ] = useFormValidation(initialValue)

    const onSubmit = async (event) => {
        event.preventDefault()
        const resp = await sendEmail( values );

        if (resp) {
            mySwal.fire({
                title: 'Email sended successfully!',
                didClose: () => {
                    mySwal.clickConfirm()
                }
            }).then( () => {
                navigate("/")
            })
        }
    }

    return (
        <div className="container mt-5 mb-5">
            <h1>Contact</h1>
            
            <form onSubmit={ onSubmit }>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input onChange={ handleInputChange } name="name" value={ values.name.value } className="form-control" type="text" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={ handleInputChange } name="email" value={ values.email.value } type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
                    <input onChange={ handleInputChange } name="subject" value={ values.subject.value } className="form-control" type="text" placeholder="Subject" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea onChange={ handleInputChange } name="message" value={ values.message.value } className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button className="btn btn-primary" type="submit"> Enviar </button>
            </form>
        </div>
    )
}