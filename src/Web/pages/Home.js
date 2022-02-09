// Libraries
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PostContext } from '../../API/context/Post/PostContext';
import Post from '../components/Post';

const Home = () => {


    const { state, latestPosts } = useContext(PostContext)

    useEffect(() => {
        if (state && !state.docs) {

            latestPosts()
        }
    }, [])



    return (

        <div className="container">

            <header className="container-fluid py-5">
                <h1 className="display-5 fw-bold">I'm Pablo, <span style={{ fontFamily: 'Bungee Inline' }}>Software engineer</span></h1>
                <p className="col-md-8 fs-4">Aquí podrá encontrar desde datos sobre aquello que me apasiona así como mi carrera profesional en detalle para aquellos que quieran saber más de mi.</p>
                <Link className='btn btn-primary' to="/file/Curriculum___Pablo_de_la_Cuesta__ES_.pdf" target="_blank" download>Download</Link>
            </header>

            <main>
                <div>
                    <h2>Últimas entradas del blog</h2>
                </div>

                <div className="row">
                    {
                        state.docs ? state.docs.map(post => (
                            <Post key={post.uid} values={post} latest={true} />
                        ))
                        : ''
                    }
                </div>

            </main>

        </div>

    );
};


export default Home