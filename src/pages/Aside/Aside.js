import { Link } from 'react-router-dom'
import Post from '../../components/Post'
import './Aside.css'

const Aside = ({ posts: { posts } }) => {
    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{ width: '380px' }}>
            <div className="widget search">
                <h3 className="h6">Search the blog</h3>
                <form className="search-form">
                    <div className="form-group">
                        <input type="search" placeholder="what are you looking for?" />
                        <button className="submit" type="submit"> <i className="fas fa-search"></i> </button>
                    </div>
                </form>
            </div>


            <div className="widget latest-posts">
                <header>
                    <h3 className="h6">Latest Posts</h3>
                </header>
                <div className="blog-posts">
                    {/* <Link to="/">
                        <div className="item d-flex align-items-center">
                            <div className="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/small-thumbnail-1.jpg" alt="..." className="img-fluid" /></div>
                            <div className="title"><strong>Alberto Savoia Can Teach You About</strong>
                                <div className="d-flex align-items-center">
                                    <div className="views"><i className="icon-eye"></i> 500</div>
                                    <div className="comments"><i className="icon-comment"></i>12</div>
                                </div>
                            </div>
                        </div>
                    </Link> */}
                    { posts.map( post => ( <Post key={post.uid} values={post} latest={false} /> )) }
                </div>
            </div>

            <div className="widget categories">
                <header>
                    <h3 className="h6">Categories</h3>
                </header>
                <div className="item d-flex justify-content-between"><span>Growth</span><span>12</span></div>
                <div className="item d-flex justify-content-between"><span>Local</span><span>25</span></div>
                <div className="item d-flex justify-content-between"><span>Sales</span><span>8</span></div>
                <div className="item d-flex justify-content-between"><span>Tips</span><span>17</span></div>
                <div className="item d-flex justify-content-between"><span>Local</span><span>25</span></div>
            </div>

        </div>
    )
}

export default Aside