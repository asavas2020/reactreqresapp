import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const url = "https://reqres.in/api/users/login";

  const loginUser = async (email, password) => {
    try {

    const response =  await axios.post(url, {email:email, password:password});
    console.log(response);
    localStorage.setItem("user", response.data.email)
    navigate("/")

    } catch (error) {
      console.log(error);
    }
    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
   
 
  };


  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block ">
        <img src={'https://picsum.photos/800/800'} alt="sample" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="Login" onSubmit={handleLogin}>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default Login