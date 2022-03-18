// Libraries
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../API/context/global/GlobalContext';
import { content } from '../../Core/language/home';
import Post from '../components/Post';

const Home = () => {

    // State and context
    const { globalState, latestPosts } = useContext(GlobalContext)

    // Use effect
    useEffect(() => {
        if (globalState && globalState.posts.length === 0) {
            latestPosts()
        }
    }, [])

    return (

        <div className="container">

            <header className="container-fluid py-5">
                <h1 className="display-5 fw-bold"> { content[ globalState["language"] ].name } <span style={{ fontFamily: 'Bungee Inline' }}> { content[ globalState["language"] ].job } </span></h1>
                <p className="col-md-8 fs-4"> { content[ globalState["language"] ].introduction } </p>
                <Link className='btn btn-primary' to="/file/Curriculum___Pablo_de_la_Cuesta__ES_.pdf" target="_blank" download>{ content[ globalState["language"] ].download }</Link>
            </header>

            <main>
                <div>
                    <h2> { content[ globalState["language"] ].latest } </h2>
                </div>

                <div className="row">
                    {
                        globalState.posts ? globalState.posts.map(post => (
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