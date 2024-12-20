import { BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from "./components/NavBar";


function App() {
  return (
  <Router>
    <Routes>
 
      <Route path="/" element={<NavBar />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
  </Router>
  );
}

export default App;
