import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from 'html-react-parser'

const PostScreen = () => {

    const [ content, setContent] = useState('')
    const [title, setTitle ] = useState('')
    const { id } = useParams()

    useEffect( () => 
    {
        async function retrieveData() {

            if ( id !== undefined ) {
                const response = await axios.get("http://localhost:8080/api/posts/" + id)
                console.log(response.data.post);    
                const { title, content} = response.data.post
                setContent(content)
                setTitle(title)
            }
        }
        retrieveData()
    }, [id])

    return (
        <div className="container">
            <h1>{ title }</h1>
            
            <div>
                { content.length === 0 ? '' : parse(content) }
            </div>
        </div>
    )
}

export default PostScreen;