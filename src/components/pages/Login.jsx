import React, { useState } from 'react';
import { Container, TextField, Button, Box, InputAdornment, IconButton } from '@mui/material';
import { useAuth } from '../../Auth/AuthContext';
import img from '../../assets/chibi-girl_1093051-35.avif';
import { useNavigate } from "react-router-dom";
import '../../Menu.css';
import ClearIcon from '@mui/icons-material/Clear';

const Login = () => {
  const [formValues, setFormValues] = useState({
    phone: '',
    password: ''
  });
  const { login } = useAuth();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleClear = (field) => {
    setFormValues({ ...formValues, [field]: '' });
  };
  const validate = () => {
    let tempErrors = {};
    if (!formValues.phone) tempErrors.phone = "Phone is required";
    if (!formValues.password) tempErrors.password = "Password is required";
    if (formValues.password.length < 6) tempErrors.password = "Password should be at least 6 characters long";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = async (formData) => {
    try {
      const response = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.msg === "Login success") {
        login(data.result, data.result.token);
        alert('Sign up successful!');
        navigate('/Home');
      } else {
        console.error('Login failed:', data);
      }
      if (response.ok) {
        console.log('Login successful', data);
      } else {
        console.error('Login error', data);
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleLogin(formValues);
      setFormValues({phone:'',password:''});
    }
    setFormValues("")
  };

  return (
    <Container
      maxWidth={false}
      className="bg-custom-gradient h-screen flex items-center justify-center"
    >
      <Box display="flex" width="100%" maxWidth="1200px" height="100%">
        {/* Image section */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <img
            src={img}
            alt="Login illustration"
            className="object-cover"
            width="450px"
            height="450px"
          />
        </Box>

        {/* Login form section */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="10rem"
        >
          <h2 className="text-4xl font-semibold">Welcome Back..</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <TextField
              name="phone"
              variant="outlined"
              fullWidth
              label="Phone"
              value={formValues.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="clear phone"
                      onClick={() => handleClear('phone')}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                style:{ fontSize: '2rem' }
              }}
              InputLabelProps={{
                style: { fontSize: '1.25rem' }  // Increase label text size
              }}
            />
            <TextField
              name="password"
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="clear password"
                      onClick={() => handleClear('password')}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { fontSize: '2rem'} 
              }}
              InputLabelProps={{
                style: { fontSize: '1.25rem' }  // Increase label text size
              }}
            />
            <button 
            type='submit'
            className="recipe-button text-3xl font-bold text-center text-black">
              Login
            </button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
