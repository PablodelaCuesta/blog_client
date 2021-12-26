import axios from 'axios';
import './Blog.css';

// Components
import Post from '../components/Post'
import { useEffect, useState } from 'react'
import Aside from './Aside/Aside';

const Blog = () => {

    const [posts, setPost] = useState({
        count: 0,
        msg: "",
        posts: []
    })


    useEffect(() => {
        async function retrieveData() {
            const response = await axios.get("http://localhost:8080/api/posts?page=1")
            setPost(response.data)
        }

        retrieveData()
    }, [])

    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="container px-4">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        {
                            posts.posts.length < 0 ? 'No hay posts' : posts.posts.map(post => (
                                <Post key={post.uid} values={post} latest={true} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <aside className="col-lg-4">
              <Aside posts={posts}/>
            </aside>
        </div>
    );
};


export default Blog