import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({})

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleCheckboxChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.checked
        })
    }

    const handleInputMultiSelect = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleCopyContent = ( obj ) => {
        for ( let key in obj) {

            console.log(key);
        }
    }

    const onSubmit = () => {

    }

    return [values, handleInputChange, handleCheckboxChange, handleInputMultiSelect, handleCopyContent, reset, onSubmit]
}