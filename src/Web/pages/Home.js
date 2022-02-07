// Libraries
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PostContext } from '../../API/context/Post/PostContext';

const Home = () => {


    const { state, latestPosts } = useContext(PostContext)

    useEffect(() => {
        if (state && !state.docs) {

            latestPosts()
        }
    }, [])



    return (

        // TODO: Add cv information


        <div className="container">

            <header class="container-fluid py-5">
                <h1 class="display-5 fw-bold">I'm Pablo, <span style={{ fontFamily: 'Bungee Inline' }}>Software engineer</span></h1>
                <p class="col-md-8 fs-4">Aquí podrá encontrar desde datos sobre aquello que me apasiona así como mi carrera profesional en detalle para aquellos que quieran saber más de mi.</p>
                <Link className='btn btn-primary' to="/file/Curriculum___Pablo_de_la_Cuesta__ES_.pdf" target="_blank" download>Download</Link>
            </header>

            <main>
                <div>
                    <h2>Últimas entradas del blog</h2>
                </div>

                <div className="row">
                    {
                        state.docs
                            ? state.docs.map(post => (
                                <div key={post.uid} className="post col-md-4">
                                    <div className="post-thumbnail"><a href="post.html"><img src={"http://localhost:8080/img/default.jpg"} alt="..." className="img-fluid" /></a></div>
                                    <div className="post-details">
                                        <div className="post-meta d-flex justify-content-between">
                                            <div className="date"> {post.timestamp} </div>

                                            <div className="category">
                                                <a href="#">Business</a>
                                            </div>

                                        </div>
                                        <a href="post.html">
                                            <h3 className="h4"> {post.title} </h3>
                                        </a>
                                        <p className="text-muted"> {post.overview} </p>
                                    </div>
                                </div>
                            ))
                            : 'No hay posts'
                    }
                </div>

            </main>

        </div>

    );
};


export default Home