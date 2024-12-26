import {useState} from 'react'
import './Login.css'
const Login = () => {

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    
  };
  const [newInput, setNewInput] = useState(initialState);
  console.log("newInput", newInput);
  
  const {firstName, lastName, email, gender} = newInput;
  return (
    <div className='container'>
    <div className='loginCard'>
    <form>
    <div className="form-group">
        <label htmlFor='email'>Enter your email ID : </label>
        <input type='text' class="form-control" value={newInput.firstName} placeholder='abc@gmail.com'/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
        <label  htmlFor='password'>Enter your Password : </label>
        <input  type='password' class="form-control" value={newInput.lastName} placeholder='*****'/>
    </div>
    <div class="form-group form-check">
    <label  htmlFor='checkbox'>
      <input class="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
 </form>
 </div>
 </div>
  )
}

export default Login
