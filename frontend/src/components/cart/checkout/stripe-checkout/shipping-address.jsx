import React from 'react';
import { Formik } from 'formik';
 
const validate = values => {
    const { name, email, address } = values;
    const errors = {};
    if (!email) { errors.email = 'Required' }
    if (!name) { errors.name = 'Required' };
    if (!address) { errors.lastName = 'Required' }
    if (!address) { errors.address = 'Required' }
    if (!address) { errors.city = 'Required' }
    if (!address) { errors.state = 'Required' }
    if (!address) { errors.zipcode = 'Required' }
    if (!address) { errors.country = 'Required' }
    if (!address) { errors.phone = 'Required' }

    return errors;
}

const ShippingAddress = ({ setShipping }) => {
    const initialValues = {
        email: '',
        name: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    }

    return (
        <div>
            <h4>Shipping Address</h4>
            <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values) => {
                // console.log('values', values);
                setShipping(values);
            }}>
                {
                    ({ values, errors, handleChange, handleSubmit }) => {
                        const { name, email, address } = errors;
                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input 
                                        type='text'
                                        name='name'
                                        onChange={handleChange}
                                        value={values.name}
                                        placeholder='Name'
                                        className={ 'yerbaropa-input ' + (name ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='lastName'
                                        onChange={handleChange}
                                        value={values.lastName}
                                        placeholder='Last Name'
                                        className={ 'yerbaropa-input ' + (name ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        value={values.email}
                                        placeholder='Email'
                                        className={ 'yerbaropa-input ' + (email ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='address'
                                        onChange={handleChange}
                                        value={values.address}
                                        placeholder='Address'
                                        className={ 'yerbaropa-input ' + (address ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='city'
                                        onChange={handleChange}
                                        value={values.city}
                                        placeholder='City'
                                        className={ 'yerbaropa-input ' + (address ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='state'
                                        onChange={handleChange}
                                        value={values.state}
                                        placeholder='State'
                                        className={ 'yerbaropa-input ' + (address ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='country'
                                        onChange={handleChange}
                                        value={values.country}
                                        placeholder='Country'
                                        className={ 'yerbaropa-input ' + (address ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='zipcode'
                                        onChange={handleChange}
                                        value={values.zipcode}
                                        placeholder='Zip Code'
                                        className={ 'yerbaropa-input ' + (address ? 'error' : '') }/>
                                </div>
                                <div>
                                    <input 
                                        type='text'
                                        name='phone'
                                        onChange={handleChange}
                                        value={values.phone}
                                        placeholder='Phone Number'
                                        className={ 'yerbaropa-input ' + (address ? 'error' : '') }/>
                                </div>
                                <div className='submit-btn'>
                                    <button type='submit' className='button is-black yerbaropa-btn submit'>
                                        Save Address
                                    </button>
                                </div>

                                {/* {
                                    user &&
                                    <div className='save-card'>
                                    <label>Save Address</label>
                                    <input 
                                        type='checkbox'
                                        checked={saveAddress}
                                        onChange={e => setSavedAddress(e.target.checked)}
                                    />
                                    </div>
                                } */}
                            </form>
                        )
                    }
                }
            </Formik>
        </div>
    );
}

export default ShippingAddress;

