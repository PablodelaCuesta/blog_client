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
import { getallCategories } from '../../API/controllers/category.controller';
import { GlobalContext } from '../../API/context/global/GlobalContext';

// TODO: Blog
/*
    * Edición y borrado de un post para administradores.
    * Ampliar la funcionalidad anterior para usuarios registrados, y que solo puedan editar su propia entrada
*/


const Blog = () => {

    const { globalState, latestPosts } = useContext(GlobalContext)
    const [drawCategories, setDrawCategories] = useState([])
    const [postlist, setPost] = useState([])
    const [pagination, setPagination] = useState({})
    const [page, setPage] = useState(1)


    useEffect(() => {
        (
            async () => {
                const resp = await getallPosts(page)
                setPost(resp.docs)

                const { hasNextPage, hasPrevPage, pagingCounter, nextPage, prevPage, totalPages } = resp
                setPagination({ hasNextPage, hasPrevPage, pagingCounter, nextPage, prevPage, totalPages })
            }
        )()
    }, [ page ])


    useEffect(() => {
        if (globalState && globalState.posts.length === 0) {
            latestPosts()
        }
    }, [])

    useEffect(() => {
        (
            async () => {
                const res = await getallCategories()
                setDrawCategories(res.resp)
            }
        )()
    }, [])

    return (
        <div className="row">
            <div className="col-lg-8">
                <div className="container px-4">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        {
                            postlist.length < 0 ? 'No hay posts' : postlist.map(post => (
                                <Post key={post.uid} values={post} latest={false} />
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(pagination).length > 0 ? <Pagination pagination={pagination} actualPage={page} setPage={setPage} /> : ''
                            }
                        </div>
                    </div>
                </div>

            </div>

            <aside className="col-lg-4">
                <Aside posts={globalState.docs} categories={drawCategories} language={globalState.language} />
            </aside>
        </div>
    );
};


export default Blog