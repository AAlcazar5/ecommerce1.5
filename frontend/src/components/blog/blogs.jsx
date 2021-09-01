import React, { useState, useEffect } from 'react'
import client from '../../client'
import Loader from './images/loader1.gif'
import { Link, withRouter } from 'react-router-dom'
import Layout from '../shared/layout'
import './blogs.styles.scss'
import Fade from 'react-reveal/Fade'

const Blogs = () => {
    const [blogpage, setBlogpage] = useState([])

    const getData = async () => {
        try { 
            const response = await client.getEntries({
                content_type: 'post'
            })
            const entries = response.items
            // console.log('all entries: ', entries)
            // console.log('individual articles: ', response.items[0])
            setBlogpage(entries)
        } 
        catch (e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        getData()
    }, [])

        // id, title, subtitle, slug, author, authorImage, date, coverImage, content

        return (
            <Layout>
                <div className="text-center font-face-montserrat">
                    <h2 className="playfair"> Blogs </h2>
                    <p className="lead montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta in ipsum non facilisis.</p>
                </div>
                <div className="whole-container">
                    <section className="pt-4">
                        <div className="blog-container">
                            <Fade>
                            {blogpage.length === 0 ?
                                <div align="center" className="pt-5 montserrat" style={{maxWidth: '300px', maxHeight: '300px'}}> <img src={Loader} alt="Loader" /> </div>
                                :
                                <div className="row">
                                {blogpage.map((item, index) => {
                                    return (
                                        <div key={index} className="col-md-6 blog-content">
                                            <div className="img-container montserrat">
                                                <img src={item.fields.coverImage.fields.file.url} className="img-blog img-fluid blog-img" alt="" />
                                            </div>
                                            <h3><Link to={`../blogs/${item.fields.slug}`} className="title montserrat">{item.fields.title}</Link></h3>
                                            <p className="subtitle montserrat">{item.fields.subtitle}</p>
                                            <p className="author montserrat">By: {item.fields.author}</p>
                                            <p className="date montserrat">Posted: {item.fields.date}</p>
                                            <div className="btn-container">
                                                <button className="button is-black">
                                                    <Link to={`../blogs/${item.fields.slug}`} className='montserrat' style={{ textDecoration: 'none', color: 'white' }}>READ MORE...</Link>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }                           
                                )}
                            </div>
                            }
                            </Fade>
                        </div>
                    </section>

                    <section className="pt-1">
                        <div className="sidebarContainer">
                            <h3 className="sidebarTitle playfair">Table of Contents</h3>
                            {
                                blogpage.map((item, index) => {
                                    return(
                                        <div key={index} className="blog-sidebar">
                                            <Link to={`../blogs/${item.fields.slug}`} className="sidebarTitle montserrat">
                                                {item.fields.title}
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>              
            </Layout>
            
        );
}

export default withRouter(Blogs)