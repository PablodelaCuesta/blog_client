import { useState } from "react";

export const useFormValidation = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);
    const [ errors, setErrors ] = useState({})

    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = ( { target } ) => {

        values[target.name]['value'] = target.value

        setValues({
            ...values
        })
    }

    const handleCheckboxChange = ( { target } ) => {

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

    const onSubmit = () => {
        
    }

    return [ values, handleInputChange, handleCheckboxChange, handleInputMultiSelect, reset, onSubmit ]
}