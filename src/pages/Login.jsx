import React from 'react'
import Register from './Register'

const Login = () => {
  return (
    <div className='formContaner'>
      <div className='formWrapper'>
        <samp className='title'>Login</samp>
        <form>
            <input type='email'placeholder='email'></input>
            <input type='password'placeholder='password'></input>

            <button>Sing in</button>
        </form>
        <p>You don't have an accunt? Register</p>
      </div>
    </div>
  )
}

export default Login
