// Libraries
import { useContext, useEffect, useState } from 'react'

// CSS
import './Blog.css';

// Components
import Post from '../components/Post'
import Aside from './Aside/Aside';

// Controllers
import { getallPosts } from '../../API/controllers/post.controller';
import { Pagination } from '../components/Pagination';
import { PostContext } from '../../API/context/Post/PostContext';
import { getallCategories } from '../../API/controllers/category.controller';

const Blog = () => {

    const { state, latestPosts } = useContext(PostContext)
    const [drawCategories, setDrawCategories] = useState([])
    const [postlist, setPost] = useState([])
    const [pagination, setPagination] = useState({})


    // TODO: Refactor this piece of code
    const retrieveAllPost = async () => {
        console.log("GETAllPost");
        const resp = await getallPosts()
        setPost(resp.docs)

        const { hasNextPage, hasPrevPage, pagingCounter, nextPage, prevPage, totalPages } = resp
        setPagination({ hasNextPage, hasPrevPage, pagingCounter, nextPage, prevPage, totalPages })
    }


    const retrieveAllCategories = async () => {
        console.log("GET all categories");
        const res = await getallCategories()
        setDrawCategories(res.resp)
    }

    // TODO: Each effect must to be independent
    useEffect(() => {
        retrieveAllCategories()
        retrieveAllPost()

        if (state && !state.docs) {
            latestPosts()
        }
    }, [])

    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="container px-4">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        {
                            postlist.length < 0 ? 'No hay posts' : postlist.map(post => (
                                <Post key={post.uid} values={post} latest={true} />
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(pagination).length > 0 ? <Pagination pagination={pagination} /> : ''
                            }
                        </div>
                    </div>
                </div>

            </div>

            <aside className="col-lg-4">
                <Aside posts={state.docs} categories={drawCategories} />
            </aside>
        </div>
    );
};


export default Blog