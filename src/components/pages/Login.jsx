import React, { useState } from 'react';
import { Container, TextField, Button, Box, Grid } from '@mui/material';
import { useAuth } from '../../Auth/AuthContext';
import img from '../../assets/b979662260ef514033b369b4a90e3bac.jpg';
import { useNavigate } from "react-router-dom";


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
        navigate('/Home')
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
    }
  };
  return (
    <Container
      maxWidth="max-w-lg"
      className="flex min-w-full min-h-screen bg-yellow-400 p-8"
    >
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
          <div className="flex justify-center items-center space-x-4 relative group w-1/2">
            <img
              src={img}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-opacity-25 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className="p-8 flex flex-col justify-center w-1/2">
            <h2 className="text-2xl font-semibold mb-2">Login</h2>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="phone"
                    variant="outlined"
                    fullWidth
                    label="Phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                </Grid>
                <Grid item xs={12}>
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
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: 3 }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
