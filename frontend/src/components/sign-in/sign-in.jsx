import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Layout from '../shared/layout';
import { Formik } from 'formik';
import { auth } from '../../firebase/firebaseConfig'
import './sign-up.styles.scss';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

const SignIn = ({ history: { push } }) => {
  const [error, setError] = useState(null);
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // console.log('values', values);
    const { email, password } = values;
    try {
      //signin with firebase
      await auth.signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      push('/shop');
      
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
            onSubmit={handleSubmit}>
            {({ 
                values, 
                errors, 
                handleChange, 
                handleSubmit, 
                isSubmitting
              }) => {
                const { email } = errors;

                return (
                <form onSubmit={handleSubmit} className="form">
                  <h2 className="yerbaropa playfair" style={{color: 'black', textAlign: 'center', marginBottom: '75px'}}>Yerbaropa</h2>
                  <h3 className="signin montserrat" style={{color: 'black', textAlign: 'center'}}>Sign In</h3>
                    <div className="field">
                      <p className="control has-icons-left has-icons-right">
                        <input 
                            type='email'
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                            placeholder='Email'
                            className={'yerbaropa-input email ' + (email ? 'error' : '')}
                          />
                      </p>
                    </div>

                    <div className="field">
                      <p className="control has-icons-left">
                      <input 
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                        placeholder='Password'
                        className='yerbaropa-input password montserrat'
                      />
                    </p>
                  </div>

                    <div className='submit-btn'>
                      <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="button is-black yerbaropa-btn submit montserrat">
                        Submit
                      </button>
                    </div>

                    <div style={{fontSize: '12px', marginTop: '40px'}} className="montserrat">By signing in, you agree to our <Link to="../shared/footer/terms.jsx">terms</Link> and <Link to="../shared/footer/privacy.jsx">privacy policy</Link>.</div>

                    <div className='error-message montserrat'>
                      {
                        error && <p>{error.message}</p>
                      }
                    </div>
                 
                </form>
                )
              }
            }
          </Formik>

         
        </div>

       

      </div>
    </Layout>
  );
}

export default withRouter(SignIn);