import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [signUp, setSignUp] = useState(true);

  const handleClick = () => {
    setSignUp(!signUp);
  }

  return (
    <div className='relative'>
      <Header/>
      <div className='absolute' >
        <img
          src= 'https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg'
          alt = 'Logo'
        />
      </div>
      <form className='bg-black absolute my-36 mx-auto right-0 left-0 w-3/12 p-4 opacity-80' >
        <h1 className='text-white font-bold text-3xl py-4 px-2 w-full '>{signUp ? 'Sign In' : 'Sign Up'}  </h1>
        { signUp &&  <input 
        type='text'
        placeholder='Name'
        className='p-2 my-2 w-full bg-transparent border-2 rounded'
        /> }
        <input 
        type='email'
        placeholder='Email'
        className='p-2 my-2 w-full bg-transparent border-2 rounded'
        />
        <input 
        type='password'
        placeholder='Password'
        className='p-2 my-2 w-full bg-transparent border-2 rounded'
        />
        <button className= 'text-white p-2 my-2  bg-red-700 w-full opacity-100'>{signUp ? 'Sign In' : 'Sign Up'}</button>
        <div className='text-white my-4 cursor-pointer' 
        onClick = {handleClick}
        >
        New To Netflix, Sign up Now
      </div>
      </form>

      
    </div>
  )
}

export default Login