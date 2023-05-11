import React from 'react'

const Register = () => {
  return (
    <div className='formContaner'>
      <div className='formWrapper'>
        <samp className='title'>Register</samp>
        <form>
            <input type='texz' placeholder='display name'></input>
            <input type='email'placeholder='email'></input>
            <input type='password'placeholder='password'></input>
            <input type='file'></input>
            <button>Sing up</button>
        </form>
        <p>You do you have an accunt? Login</p>
      </div>
    </div>
  )
}

export default Register
