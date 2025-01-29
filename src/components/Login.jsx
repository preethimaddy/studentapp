import {useState} from 'react'
import './Login.css'
const Login = () => {

  
  const handleSubmit =()=>{

  }
  const [username, setUsername] = useState();
  console.log("username", username);

  const [password, setPassword] = useState();
  console.log("Password", password);
 
  return (
    <div className='container my-4'>
    <div className='loginCard'>
    <form>
    <div className="form-group">
        <label htmlFor='email'>Enter your User email ID : </label>
        <input type='text' onChange={e=> setUsername(e.target.value)} placeholder='abc@gmail.com'/>
        <br />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
        <label  htmlFor='password'>Enter your Password : </label>
        <input  type='password' onChange={e=> setPassword(e.target.value)} placeholder='*****'/>
    </div>
    <div class="form-group form-check">
    <label  htmlFor='checkbox'>
      <input class="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
 </form>
 </div>
 </div>
  )
}

export default Login
