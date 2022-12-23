import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  loadingToggleAction,
  loginAction
} from '../../store/actions/AuthActions'



function Login (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')




  return (
    <div className='login-form-bx'>
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
             
              <form>
                <div className='form-group'>
                  <label className='mb-2 '>
                    <strong className=''>Email</strong>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className='text-danger fs-12'>{errors.email}</div>
                  )}
                </div>
                <div className='form-group'>
                  <label className='mb-2 '>
                    <strong className=''>Password</strong>
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <div className='text-danger fs-12'>{errors.password}</div>
                  )}
                </div>
                <div className='form-row d-flex justify-content-between mt-4 mb-2'>
                  <div className='form-group'>
                    <div className='custom-control custom-checkbox ml-1 '>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='basic_checkbox_1'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='basic_checkbox_1'
                      >
                        Remember my preference
                      </label>
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <button type='submit' className='btn btn-primary btn-block'>
                    Sign In
                  </button>
                </div>
              </form>
              <div className='new-account mt-2'>
                <p className='mb-0'>
                  Don't have an account?{' '}
                  <Link className='text-black' to='/page-register'>
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-5 d-flex box-skew1'>
            <div className='inner-content align-self-center'>
              <Link to='/dashboard' className='login-logo'>
                <img src={logo} alt='' className='logo-icon mr-2' />
              </Link>
              <h2 className='m-b10 text-white'>Login to Evoload Drivers Hub</h2>
              <p className='m-b40 text-white'>
                Evoload Drivers Hub and Trucks Marketplace
              </p>
              <ul className='social-icons mt-4'>
                <li>
                  <button>
                    <i className='fa fa-google' />
                  </button>
                </li>
                <li>
                  <button>
                    <i className='fa fa-linkedin' />
                  </button>
                </li>
                <li>
                  <button>
                    <i className='fa fa-facebook' />
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