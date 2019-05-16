import React, { useState } from 'react';

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
  }
};

const Login = () => {
  const [username, useUsername] = useState('');
  const [password, usePassword] = useState('');
  // const [ email, useEmail ] = useState('');

  function handleChange(field, updatedVal) {
    if (field === 'username') useUsername(updatedVal);
    if (field === 'password') usePassword(updatedVal);
    // if (field === 'email') useEmail(updatedVal);
  }

  function handleSubmit() {
    console.log(username, password);
    usePassword('');
    useUsername('');
    // useEmail('');
    fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(userLoggedIn => {
        console.log(userLoggedIn);
        // if (userLoggedIn.authenticated) {
        //   res.redirect('/projects');
        // }
      });
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.header}>Signup Page</h1>
        {/* <input
          style={styles.input}
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
        /> */}
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
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
