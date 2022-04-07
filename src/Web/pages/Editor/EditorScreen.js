
import { useRef } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { useForm } from '../../../API/hooks/useForm';
import { EditorTiny } from '../../components/EditorTiny';

import { getallCategories } from '../../../API/controllers/category.controller';
import { MultiSelect } from "react-multi-select-component";
import { getPost, postNewPost } from '../../../API/controllers/post.controller';
import { useParams } from 'react-router-dom';


export const EditorScreen = () => {

    const editorRef = useRef(null);
    const [options, setOptions] = useState([])
    const [categories, setCategories] = useState([])
    const [values, handleInputChange, handleCopyContent] = useForm({})

    const { id } = useParams()




    // TODO: Get the data related to id that comes with params variable
    // TODO: To get that data we need to define a function, that function will make a call to the backend

    // Handlers
    const handleSubmit = async (e) => {
        e.preventDefault()
        values['categories'] = categories.map( category => category.value)
        values['content'] = editorRef.current.getContent()
        console.log(values);
        const resp = await postNewPost(values)
        console.log(resp);
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
                    const post = await getPost( id )
                    
                }
            }
        )()
    }, [])

    return (
        <main className='container'>

            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" className="form-control" placeholder="title" name='title' onChange={handleInputChange} value={ values.title } aria-label="title" aria-describedby="basic-addon1" required />
                    <small className="invalid-feedback">Please provide a valid city.</small>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Overview</span>
                    <textarea name='overview' onChange={handleInputChange} className="form-control" aria-label="With textarea"></textarea>
                    <div className="invalid-feedback">Please provide an overview.</div>
                </div>

                <div className="mb-3">
                    <EditorTiny editorRef={editorRef} />
                </div>

                <div className='mb-3'>
                    <MultiSelect options={options} value={categories} labelledBy='Select' onChange={setCategories} />
                </div>


                <button className='btn btn-primary' onClick={handleSubmit} >Save</button>
            </form>
        </main>
    )
}
