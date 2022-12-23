import React, { useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';




function Login (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const createNotification = () => {
    
    NotificationManager.error('Coming Soon!!!!', 'Close after 3000ms', 3000);
          
  }
const handleChange = () => {
createNotification()
}


const handleSubmit = () => {
  createNotification()
}

  return (
    <div className='login-form-bx'>
      <NotificationContainer/>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-7 box-skew d-flex'>
          <div className='authincation-content'>
            <div className='mb-4'>
              <h3 className='mb-1 font-w600'>Welcome to Evoload</h3>
              <p className=''>Sign in by entering information below</p>
            </div>
            {props.errorMessage && (
              <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                {props.errorMessage}
              </div>
            )}
            {props.successMessage && (
              <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                {props.successMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className='form-group d-flex flex-column justify-content-start align-items-start'>
                <label className='m-2 text-secondary text-bold '>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  value={email}
                  onChange={handleChange}
                />
                
              </div>
              <div className='form-group d-flex flex-column justify-content-start align-items-start'>
                <label className='m-2 text-secondary text-bold '>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  value={password}
                  onChange={handleChange}
                />
                
              </div>
              <div className='form-row d-flex justify-content-between mt-4 mb-2'>
                <div className='form-group'>
                  <div className='custom-control custom-checkbox ml-1 '>
                    <input
                      type='checkbox'
                      className='form-check-input mr-2'
                      id='basic_checkbox_1'
                      onChange={handleChange}
                    />
                    <label
                      className='form-check-label ml-2'
                      htmlFor='basic_checkbox_1'
                    >
                      Remember my preference
                    </label>
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <button type='submit' className='btn btn-primary btn-block' onClick={handleSubmit}>
                  Sign In
                </button>
              </div>
            </form>
            <div className='new-account mt-2'>
              <p className='mb-0'>
                Don't have an account?{' '}
                <button className='btn btn-primary btn-block' onClick={handleSubmit}>
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-5 d-flex box-skew1'>
          <div className='inner-content align-self-center'>
            {/* <button  className='login-logo'>
              <img src='' alt='' className='logo-icon mr-2 btn btn-primary btn-block' />
            </button> */}
            <h2 className='m-b10 text-white'>Login to Evoload Drivers Hub</h2>
            <p className='m-b40 text-white'>
              Evoload Drivers Hub and Trucks Marketplace
            </p>
            <ul className='social-icons mt-4'>
              <li>
                <button onClick={handleSubmit}>
                  <i className='fa fa-google image-upload-icon' />
                </button>
              </li>
              <li>
                <button onClick={handleSubmit}>
                  <i className='fa fa-linkedin image-upload-icon' />
                </button>
              </li>
              <li>
                <button onClick={handleSubmit}>
                  <i className='fa fa-facebook image-upload-icon' />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Login