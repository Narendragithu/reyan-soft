import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signUpUser } from '../redux/actions/userAction';
import {useDispatch}  from "react-redux";

function Signup() {
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [confirmpassword, setConfirmpassword] = useState('');
  var dispatch=useDispatch()

  var navigate = useNavigate();
  var submitHandler = (e) => {
    e.preventDefault(); //prevent the default behaviour
    var data = {
      username,
      password,
      email,
      confirmpassword,
    };

    if (password === confirmpassword) {
      dispatch(signUpUser(data))
    }
    //   axios
    //     .post('http://localhost:5020/signup', data)
    //     .then((res) => {
    //       console.log(res);
    //       navigate('/login');
    //     })
    //     .catch(() => {});
    // };

    return (
      <div className='container mt-3 '>
        <div className='row'>
          <h2 className='text-center fs-4'>Signup</h2>
          <div className='col-4 m-auto my-4 bg-secondary px-4 py-3 text-white fs-5 rounded'>
            <form onSubmit={submitHandler}>
              <div className='mb-3'>
                <label htmlFor='username' className='form-label'>
                  User name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
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
              <div className='mb-3'>
                <label htmlFor='cpassword' className='form-label'>
                  confirmpassword
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='cpassword'
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  required
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary w-100 fs-5 fw-medium'
              >
                Register
              </button>
            </form>
            <p className='pt-3'>
              Have already account?
              <Link to='/login' className='text-warning fs-5 fw-medium px-2 '>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
