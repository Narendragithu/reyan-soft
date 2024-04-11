import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

function Login() {
  // var [token, setToken] = useState(null);
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  // setToken(localStorage.getItem('jwt-token'))
  // let navigate = useNavigate();

  

  let submitHandler = (e) => {
    e.preventDefault(); //prevent the default behaviour
    let userData = {
      email,
      password,
    };

    //   axios
    //     .post('http://localhost:5020/login', data)
    //     .then((res) => {
    //       // console.log(res.data.token);
    //       setToken(window.localStorage.setItem('jwt-token', res.data.token));
    //       setToken(localStorage.getItem('jwt-token'));
    //       // navigate('/profile');
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    // if (token) {
    //   return navigate('/profile');
    // }
    return (
      <div className='container mt-3 '>
        <div className='row'>
          <h2 className='text-center fs-4'>Login</h2>
          <div className='col-4 m-auto my-4 bg-secondary px-4 py-3 text-white fs-5 rounded'>
            <form onSubmit={submitHandler}>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary w-100 fs-5 fw-medium'
              >
                Login
              </button>
            </form>
            <p className='pt-3'>
              Don't have account ?
              <Link to='/signup' className='text-warning fs-5 fw-medium px-3 '>
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Login