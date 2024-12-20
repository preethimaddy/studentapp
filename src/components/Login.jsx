import React from 'react'
const Login = () => {
  return (
    <div >
    <form>
    <div className="mb-3 mt-3">
        <label htmlFor='email'>Enter your email ID</label>
        <input type='text' value="" placeholder='abc@gmail.com'/>
    </div>
    <div className="mb-3">
        <label  htmlFor='password'>Enter your Password</label>
        <input class="form-control" type='password' value="" placeholder='*****'/>
    </div>
    <div class="form-check mb-3">
    <label  htmlFor='checkbox'class="form-check-label">
      <input class="form-check-input" type="checkbox" value="" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
 </form>
 </div>
  )
}

export default Login
