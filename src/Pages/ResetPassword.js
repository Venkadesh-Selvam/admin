import React from 'react'
import CustomInput from '../Components/CustomInput';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className='py-5' style ={{'background':'#00008B'}}>
      <div 
      className='my-5 w-25 bg-white rounded-1 mx-auto p-4'>
        <h3 className = 'text-center title'>Reset Password</h3>
        <p className = 'text-center'>Please enter your new password</p>
        <CustomInput type='password' label='New Password' id='pswd'/>
        <CustomInput type='password' label='Confirm Password' id='confmpswd'/>
        <Link
        to = '/'
        className='border-o px-3 py-2 text-bold w-100'
        type = 'submit'
        style ={{
          'background':'whitesmoke',
          'text-decoration': 'none',
          'text-align':'center'
          }}>
          Login
        </Link>

      </div>
    </div>
  )
}

export default ResetPassword;
