import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Link } from 'react-router-dom'
import logo from './images/evoload-logo-light.svg'


function Login (props) {
  const [email ] = useState('')
  const [password] = useState('')


  const createNotification = () => {
 toast.info("COMING SOON, January 30th 2023",{
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });
   
          
  }
const handleChange = () => {
createNotification()
}


const handleSubmit = (e) => {
e.preventDefault();
  createNotification()
}

  return (
    <div className='login-form-bx'>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    <div className='container-fluid'>
      <div className='row' style={{width:'100%'}}>
        <div className='col-lg-6 col-md-7 col-sm-12 box-skew d-flex'>
          <div className='authincation-content'>
            <div className='mb-4'>
              <h3 className='mb-1 font-w600 welcome'>Launch 30th January 2023</h3>
              <p className='message'>Sign in by entering information below</p>
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
                <label className='m-2 '>
                 <strong className='text-secondary'>Email</strong>
                </label>
                <input
                  type='email'
                  className='px-5 py-2 border'
                  value={email}
                  onChange={handleChange}
                  style={{width:'100%'}}
                />
                
              </div>
              <div className='form-group d-flex flex-column justify-content-start align-items-start'>
                <label className='m-2'>
                <strong className='text-secondary'>Password</strong>
                </label>
                <input
                  type='password'
                  className='px-5 py-2 border'
                  value={password}
                  onChange={handleChange}
                  style={{width:'100%'}}
                />
                
              </div>
              <div className='form-row d-flex justify-content-between mt-4 mb-2'>
                <div className='form-group'>
                  <div className='custom-control custom-checkbox '  style={{width:'100%'}}>
                    <input
                      type='checkbox'
                      className='form-check-input mr-2'
                      id='basic_checkbox_1'
                      onChange={handleChange}
                    />
                    <label
                      className='form-check-label ml-2'
                      htmlFor='basic_checkbox_1'
                      style={{width:'100%'}}
                    >
                      Remember my preference
                    </label>
                  </div>
                </div>
              </div>
              <div className='text-center w-100'>
                  <button type='submit' 
                  className='py-2 px-4 btn-block border bg-primary text-white' 
                  onClick={handleSubmit}
                  style={{width:'100%'}}
                  >
                    Sign In
                  </button>
                </div>
            </form>
            <div className='new-account mt-2'  style={{width:'100%'}}>
              <p className='form-check-label mb-0 message'>
                Don't have an account?
                <Link to='#' className='link text-black text-decoration-none mx-1' onClick={handleSubmit}>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-5 d-flex box-skew1'>
          <div className='inner-content align-self-center'>
          <Link to='#' className='login-logo'  onClick={handleSubmit}>
                <img src={logo} alt='' className='logo-icon mr-2' />
              </Link>
            <h2 className='text-white section-head'>Login to Evoload Drivers Hub</h2>
            <p className='text-white section-paragraph'>
              Evoload Drivers Hub and Trucks Marketplace
            </p>
            <ul className='social-icons mt-4'>
              <li>
                <a href='https://twitter.com/evoload' target='blank'>
                <i class="fa fa-twitter image-upload-icon"></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/company/evoload/?originalSubdomain=ro' target='blank'>
                  <i className='fa fa-linkedin image-upload-icon' />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UCaGw0SwH9TE6Pe6KFJt7Wpg' target='blank'>
                  <i className='fa fa-youtube image-upload-icon' />
                </a>
              </li>
              <li>
                <a href='https://t.me/evoloadofficialEN' target='blank'>
                <i class="fa fa-telegram image-upload-icon"></i>
                </a>
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