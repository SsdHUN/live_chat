import React from 'react'
import Login from './Login'

const Register = () => {
  return (
    <div className='formContaner'>
      <div className='formWrapper'>
        <samp className='title'>Register</samp>
        <form>
            <input type='texz' placeholder='display name'></input>
            <input type='email'placeholder='email'></input>
            <input type='password'placeholder='password'></input>
            <input type='file' id="file"></input>
            <label htmlFor='file'>
                <samp id="add_img">Add an avatar here</samp>
            </label>
            <button>Sing up</button>
        </form>
        <p>Do you have an accunt? Login</p>
      </div>
    </div>
  )
}

export default Register
