import React from 'react'

const SignUp = () => {
  return (
    <>
      <form>
      <div className="mb-3 mt-3">
        <label htmlFor='firstName'>Enter your firstName </label>
        <input type='text' value="" placeholder='firstName'/>
    </div>
    <div className="mb-3 mt-3">
        <label htmlFor='lastName'>Enter your LastName</label>
        <input type='text' value="" placeholder='lastName'/>
    </div>
    <div className="mb-3 mt-3">
        <label htmlFor='email'>Enter your email ID</label>
        <input type='text' value="" placeholder='abc@gmail.com'/>
    </div>
    <div className="mb-3 mt-3">
        <label  htmlFor='password'>Enter your Password</label>
        <input class="form-control" type='password' value="" placeholder='*****'/>
    </div>
    <div className="mb-3 mt-3">
        <label  htmlFor='number'>Enter your number</label>
        <input class="form-control" type='number' value="" placeholder='98XXXXXXX'/>
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
 </form>
    
    </>
  )
}

export default SignUp