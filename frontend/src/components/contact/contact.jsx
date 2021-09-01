import React, { useState } from 'react'
import Axios from 'axios'
import { firestore } from '../../firebase/firebaseConfig' // this is referenced as db in tutorial example
import Layout from '../shared/layout'
import './contact.styles.scss'
import URL from '../../url';

// nodemailer
const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      URL,
      formData
    )
      .then(res => {
        firestore.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Layout>
      <div className="contact">
        <div className="formContainer">
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="us playfair" style={{color: 'black', textAlign: 'center'}}>Contact Us</h2>
            <input
              type="text"
              name="name"
              className="name montserrat"
              placeholder="Name"
              onChange={updateInput}
              value={formData.name || ''}
            />
            <input
              type="email"
              name="email"
              className="email montserrat"
              placeholder="Email"
              onChange={updateInput}
              value={formData.email || ''}
            />
            <textarea
              type="text"
              name="message"
              className="message montserrat"
              placeholder="Message"
              onChange={updateInput}
              value={formData.message || ''}
            />
            <button type="submit" className="button is-black montserrat">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactForm