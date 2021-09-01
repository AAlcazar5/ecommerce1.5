import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import client from '../../client'
import marked from 'marked'
import Layout from '../shared/layout'
// import Loader from '../images/loader.gif'
import './single-article.styles.scss'

const SingleArticle = (props) => {
    const [article, setArticle] = useState([])

    const getData = async () => {
        const slug = props.match.params.slug

        try { 
            const response = await client.getEntries({
                content_type: 'post',
                'fields.slug': slug
            })
            const entries = response.items
            // console.log('our entries: ', entries)
            setArticle(entries)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
            getData();
        }, 
    )

    // const redirectToTarget = () => {
    //     props.history.push('/Blogs')
    // }

    function getParsedMarkdown(blogDescription) {
        return {
            __html: marked(blogDescription, { sanitize: true })
        }
    }

        return (
            <Layout>
                {/* {this.state.article.length === 0 ?
                    <div align="center" className="pt-5"> <img src={Loader} alt="Loader" /> </div> */}
                    :
                    {
                        article.map((item, index) => {
                            return(
                                <div className="container" id="progress-bar" key={index}>
                                    <div className="row">
                                        <div className="col-md-12 article-content">
                                            <div className="img-container montserrat">
                                                <img src={item.fields.coverImage.fields.file.url} className="img-blog img-fluid blog-img" alt="" />
                                            </div>
                                            <h2 className="mt-4 title montserrat">{item.fields.title}</h2>
                                            <p className="mt-4 subtitle montserrat">{item.fields.subtitle}</p>
                                            <p className="mt-4 date montserrat">Published: {item.fields.date}</p>
                                            <p className="mt-4 author montserrat">By: {item.fields.author}</p>
                                            <p className="montserrat" dangerouslySetInnerHTML={getParsedMarkdown(item.fields.content)}></p>
                                            <div className="btn-container">
                                                <button className="button is-black montserrat" style={{ cursor: 'pointer' }}><Link to="/blogs">Back</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    //}
                    
                 } 
            </Layout>
        )

}

export default withRouter(SingleArticle)