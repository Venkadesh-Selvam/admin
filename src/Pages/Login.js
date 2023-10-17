import React from 'react'
import CustomInput from '../Components/CustomInput';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='py-5' style ={{'background':'#00008B'}}>
      <div 
      className='my-5 w-25 bg-white rounded-1 mx-auto p-4'>
        <h3 className = 'text-center title'>Login</h3>
        <p className = 'text-center'>Login to your account to continue</p>
        <CustomInput type='text' label='E-mail Address' id='e-mail'/>
        <CustomInput type='password' label='Password' id='pswd'/>
        <div className = 'mb-3 text-end'>
          <Link to = '/forgot-password'>
          Forgot Password?
          </Link>
        </div>
        <Link
        to='/'
        className='text-white bold  border-o px-3 py-2  w-100'
        type = 'submit'
        style ={{'background':'#00008B',
        'text-decoration': 'none',
        'text-align':'center'}}>
          Login
        </Link>

      </div>
    </div>
  )
}

export default Login;
