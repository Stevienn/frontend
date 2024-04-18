import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignUp = () => {
  return (
    <section className="main-container">
      <section className='sub-container'>
        <h1>Sign Up</h1>
        <div className="input-control">
          <p>Your Name</p>
          <input type="text" placeholder='ex : John Doe' />
          <p>Email</p>
          <input type="email" placeholder='ex : johndoe@gmail.com' />
          <p>Password</p>
          <input type="password" placeholder='********' />
        </div>
        <div className="login-control">
          <input type="checkbox" /><h2>By continuing, I agree to the terms of use & privacy policy.</h2>
        </div>
        <button>Sign Up</button>
        <div className="login-control">
          <p>Already have an account?</p><a href="#">Login Here</a>
        </div>
        
        
      </section>
    </section>
  )
}
