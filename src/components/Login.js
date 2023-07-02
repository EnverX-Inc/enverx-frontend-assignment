import React, { useState } from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useDispatch } from 'react-redux';
import { login } from './appSlice';
import { auth } from './../Firebase.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        setLoading(false);
        dispatch(
          login({
            id: authUser.user.uid,
            email: authUser.user.email,
          })
        );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError('Invalid email or password');
      });
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        {loading && <LinearProgress className="login__progress" />}
        <form className="login__form" noValidate autoComplete="off">
          <h3>Sign In</h3>
          {error && <p className="login__error">{error}</p>}
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login__buttons">
            <Button href="/register" color="primary">
              Create account
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={loginUser}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
