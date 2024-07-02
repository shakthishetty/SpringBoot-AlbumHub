import React, {useState} from 'react';
import { Button, TextField, Container } from '@mui/material';
import {fetchPostData} from 'client/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      navigate('/');
      window.location.reload()
    } 
  }, []); 

  const validateEmail = () => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    // Basic password length validation
    return password.length >= 6 && password.length <= 15;
  };

  const handleLogin = async () => {
    // Reset previous errors
    setErrors({ email: '', password: '' });

    // Validation
    if (!validateEmail()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      return;
    }

    if (!validatePassword()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters' }));
      return;
    }
    // Add your login logic here
    fetchPostData("/auth/users/add",{email,password})
    .then(() => {
      setLoginError('');
      navigate('/login');
      window.location.reload()
      
    }) .catch((error) => {
        console.error('Login error:', error);
        // Handle other login errors
        setLoginError('An error occurred during login');
  });

  };

    return (
      <Container component="main" maxWidth="xs">
          <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
          <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Register
        </Button>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      </Container>
    );

};

export default AuthRegister;
