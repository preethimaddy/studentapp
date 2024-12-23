import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <>
    <div className="container">
      <div className="signup">
      <form className='form'>
      <div className="form-group">
        <label htmlFor='firstName'>Enter your firstName </label>
        <input type='text'class="form-control" value="" placeholder='firstName'/>
    </div>
    <div className="form-group">
        <label htmlFor='lastName'>Enter your LastName</label>
        <input type='text' class="form-control" value="" placeholder='lastName'/>
    </div>
    <div className="form-group">
        <label htmlFor='email'>Enter your email ID</label>
        <input type='text'class="form-control" value="" placeholder='abc@gmail.com'/>
    </div>
    <div className="form-group">
        <label  htmlFor='password'>Enter your Password</label>
        <input class="form-control" type='password' value="" placeholder='*****'/>
    </div>
    <div className="form-group">
        <label  htmlFor='number'>Enter your number</label>
        <input class="form-control" type='number' value="" placeholder='98XXXXXXX'/>
    </div>
    <br />
  <button type="submit" class="btn btn-primary">Submit</button>
 </form>
 </div>
 </div>
    </>
  )
}

export default SignUp