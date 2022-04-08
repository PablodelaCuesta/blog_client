
import { useRef } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { EditorTiny } from '../../components/EditorTiny';

import { getallCategories } from '../../../API/controllers/category.controller';
import { MultiSelect } from "react-multi-select-component";
import { getPost, postNewPost } from '../../../API/controllers/post.controller';
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
    title: "Title",
    overview: "Overview",
    categories: []
}

export const EditorScreen = () => {

    const editorRef = useRef(null);
    const [options, setOptions] = useState([])
    const [categories, setCategories] = useState([])
    const [values, setValues] = useState(initialState)

    const { id } = useParams()
    const navigate = useNavigate()

    // TODO: Get the data related to id that comes with params variable
    // TODO: To get that data we need to define a function, that function will make a call to the backend

    // Handlers
    const handleSubmit = async (e) => {
        e.preventDefault()
        values['categories'] = categories
        values['content'] = editorRef.current.getContent()
        const resp = await postNewPost(values)

        if (resp) {
            navigate("/")
        }
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    // Hooks
    useEffect(() => {

        (
            async () => {
                const { resp } = await getallCategories()
                const options = resp.map(category => ({
                    label: category.name,
                    value: category.uid
                }))

                setOptions(options)

                if (id) {
                    const resp = await getPost(id)
                    setValues(resp)
                    setCategories(resp['categories'])
                }
            }
        )()
    }, [])

    return (
        <main className='container'>

            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" className="form-control" placeholder="title" name='title' onChange={handleInputChange} value={values.title} aria-label="title" aria-describedby="basic-addon1" required />
                    <small className="invalid-feedback">Please provide a valid title.</small>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Overview</span>
                    <textarea name='overview' onChange={handleInputChange} value={values.overview} className="form-control" aria-label="With textarea"></textarea>
                    <div className="invalid-feedback">Please provide an overview.</div>
                </div>

                <div className="mb-3">
                    <EditorTiny editorRef={editorRef} content={values.content} />
                </div>

                <div className='mb-3'>
                    <MultiSelect options={options} value={categories} labelledBy='Select' onChange={setCategories} />
                </div>


                <button className='btn btn-primary' onClick={handleSubmit} >Save</button>
            </form>
        </main>
    )
}
