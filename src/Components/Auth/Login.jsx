import React, { useState } from 'react';
// import MainContainer from 'MainContainer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBox: {
    width: '40%',
    maxWidth: '25em',
    height: '50%',
    border: 'solid black 1px',
    padding: '3em'
  },
  header: {
    textAlign: 'center'
  },
  input: {
    display: 'block',
    width: '100%',
    height: '2.5em',
    marginBottom: '2em',
    padding: '0 1em',
    fontSize: '1.25em'
  },
  button: {
    width: '10em',
    padding: '0.5em',
    float: 'right'
  },
  signupLink: {
    fontSize: '10px',
    alignItems: 'center',
    paddingBottom: '20px'
  }
};

const Login = props => {
  const [username, useUsername] = useState('');
  const [password, usePassword] = useState('');

  function handleChange(field, updatedVal) {
    if (field === 'username') useUsername(updatedVal);
    if (field === 'password') usePassword(updatedVal);
  }

  function handleSubmit() {
    console.log(username, password);
    usePassword('');
    useUsername('');
    fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(userLoggedIn => {
        console.log('user', userLoggedIn);
        if (userLoggedIn.result) {
          props.history.push('/projects');
        }
      });
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.header}>Login Page</h1>
        <input
          style={styles.input}
          type="text"
          placeholder="username"
          value={username}
          onChange={e => handleChange('username', e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="password"
          value={password}
          onChange={e => handleChange('password', e.target.value)}
        />
        <button style={styles.button} type="button" onClick={handleSubmit}>
          Login In
        </button>
        <p style={styles.signupLink}>
          Not a member. <br /> <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
