import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='container'>
    <div className='loginCard'>
    <form>
    <div className="form-group">
        <label htmlFor='email'>Enter your email ID : </label>
        <input type='text' class="form-control" value="" placeholder='abc@gmail.com'/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
        <label  htmlFor='password'>Enter your Password : </label>
        <input  type='password' class="form-control" value="" placeholder='*****'/>
    </div>
    <div class="form-group form-check">
    <label  htmlFor='checkbox'>
      <input class="form-check-input" type="checkbox" value="" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
 </form>
 </div>
 </div>
  )
}

export default Login
