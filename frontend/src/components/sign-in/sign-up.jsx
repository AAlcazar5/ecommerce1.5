import React, { useState } from 'react';
import Layout from '../shared/layout';
import { Formik } from 'formik';
import { auth, createUserProfileDocument } from '../../firebase/firebaseConfig';
import { withRouter, Link } from 'react-router-dom';
import './sign-up.styles.scss';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.firstname) { errors.firstname = 'Required' }
  if (!values.password) { errors.password = 'Required' }
  return errors;
}

const SignUp = ({ history: { push } }) => {
  const [error, setError] = useState(null);
  const initialValues = {
    firstname: '',
    email: '',
    password: '',
  }

  const handleSignUp = async (values, { setSubmitting }) => {
    const { firstname, email, password } = values;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName: firstname });
      push('/shop');
      setSubmitting(false);
    } catch (error) {
      console.log('error', error);
      setSubmitting(false);
      setError(error);
    }
  }

  return (
    <Layout>
      <div className='sign-up'>
        <div className='form-container'>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSignUp}
          >
            {
              ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                const { firstname, email, password } = errors;
                return (
                  <form onSubmit={handleSubmit} className="form">
                  <h2 className="yerbaropa playfair" style={{color: 'black', textAlign: 'center', marginBottom: '75px'}}>Yerbaropa</h2>
                  <h3 className="montserrat" style={{color: 'black'}}>Sign Up</h3>

                    <div>
                      <input 
                        type='text'
                        name='firstname'
                        onChange={handleChange}
                        value={values.firstname}
                        placeholder='First Name'
                        className={ 'yerbaropa-input ' + ( firstname ? 'error' : '' ) } 
                      />
                    </div>

                    <div>
                      <input 
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        placeholder='Email'
                        className={ 'yerbaropa-input ' + ( email ? 'error' : '' ) }
                      />
                    </div>

                    <div>
                      <input 
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                        placeholder='Password'
                        className={ 'yerbaropa-input ' + ( password ? 'error' : '' ) }
                      />
                    </div>
                    <div className='submit-btn'>
                      <button
                        type='submit'
                        disabled={isSubmitting}
                        className='button is-black yerbaropa-btn submit montserrat'
                      >
                        Sign Up
                      </button>
                    </div>

                    <div style={{fontSize: '12px', marginTop: '40px'}} className="montserrat">By signing in, you agree to our <Link to="../shared/footer/terms.jsx">terms</Link> and <Link to="../shared/footer/privacy.jsx">privacy policy</Link>.</div>

                    <div className='error-message montserrat'>
                      {
                        error && <p>{error.message}</p>
                      }
                    </div>
                  </form>
                );
              } 
            }
          </Formik>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(SignUp);