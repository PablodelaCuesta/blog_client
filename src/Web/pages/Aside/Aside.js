import './Aside.css'

// Components
import Post from '../../components/Post'
import { asideContent } from '../../../Core/language/aside'


const Aside = ({ posts = [], categories, language }) => {

    return (
        <div>
            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{ width: '380px' }}>
                <div className="widget search">
                    <h3 className="h6">{ asideContent[ language ].title }</h3>
                    <form className="search-form">
                        <div className="form-group">
                            <input type="search" placeholder={ asideContent[language].placeholder } />
                            <button className="submit" type="submit"> <i className="fas fa-search"></i> </button>
                        </div>
                    </form>
                </div>
                <div className="widget latest-posts">
                    <header>
                        <h3 className="h6">{ asideContent[ language ].latest }</h3>
                    </header>
                    <div className="blog-posts">
                        {
                            posts.map(post => (
                                <Post key={post.uid} values={post} latest={false} />
                            ))
                        }
                    </div>
                </div>
                <div className="widget categories">
                    <header>
                        <h3 className="h6">{ asideContent[ language ].categories }</h3>
                    </header>
                    {
                        // TODO: Categories should be another filter by posts
                        categories.map(category => (
                            <div key={category.uid} className="item d-flex justify-content-between">
                                <span>{category.name}</span><span>{category.posts.length}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Aside