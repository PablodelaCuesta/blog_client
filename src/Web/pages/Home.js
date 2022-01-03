// Libraries
import { useContext, useEffect } from 'react'
import { PostContext } from '../../API/context/Post/PostContext';

const Home = () => {


    const { state, latestPosts } = useContext(PostContext)

    useEffect(() => {
        if (state && !state.docs) {

            latestPosts()
        }
    }, [ ])



    return (

        // TODO: Add cv information


        <div className="container">
            <header>
                <h2>Latest from the blog</h2>
                <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </header>
            <div className="row">
                {
                    state.docs
                        ? state.docs.map(post => (
                            <div key={post.uid} className="post col-md-4">
                                <div className="post-thumbnail"><a href="post.html"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-1.jpg" alt="..." className="img-fluid" /></a></div>
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
        </div>

    );
};


export default Home