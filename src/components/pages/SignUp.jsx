import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, InputAdornment, IconButton } from '@mui/material';
import img from '../../assets/WEB-StellaLaurino_FoodForThought_BurmeseFood-100.webp';
import { useNavigate } from "react-router-dom";
import '../../Menu.css';
import ClearIcon from '@mui/icons-material/Clear';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Optionally clear local storage if used for form data
    localStorage.removeItem('formValues');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClear = (field) => {
    setFormValues({ ...formValues, [field]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.phone) tempErrors.phone = "Phone is required";
    if (!formValues.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formValues.email)) tempErrors.email = "Email is invalid";
    if (!formValues.password) tempErrors.password = "Password is required";
    if (formValues.password.length < 6) tempErrors.password = "Password should be at least 6 characters long";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const signUp = async (formData) => {
    try {
      const response = await fetch('http://localhost:4000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Sign-up successful', data);
        // Clear form values
        setFormValues({
          name: '',
          phone: '',
          email: '',
          password: ''
        });
        // Optionally clear local storage
        localStorage.removeItem('formValues');
        // Redirect to login page
        navigate('/login');
      } else {
        console.error('Sign-up error', data);
      }
    } catch (error) {
      console.error('An error occurred during sign-up', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      signUp(formValues);
      setFormValues({ ...formValues, [name]: value });
    }
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
          padding="2rem"
        >
          <img
            src={img}
            alt="Sign Up illustration"
            className="object-cover"
            width="500px"
            height="500px"
          />
        </Box>

        {/* Sign up form section */}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="10rem"
        >
          <h2 className="text-3xl font-semibold">Welcome To Our Myanmar Cuisine..</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <TextField
              name="name"
              variant="outlined"
              fullWidth
              label="Name"
              value={formValues.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="clear name"
                      onClick={() => handleClear('name')}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { fontSize: '1.5rem' }
              }}
              InputLabelProps={{
                style: { fontSize: '1.25rem' }  // Increase label text size
              }}
            />
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
                style: { fontSize: '1.5rem' }
              }}
              InputLabelProps={{
                style: { fontSize: '1.25rem' }  // Increase label text size
              }}
            />
            <TextField
              name="email"
              variant="outlined"
              fullWidth
              label="Email Address"
              value={formValues.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              InputProps={{
                style: { fontSize: '1.5rem' }
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
                style: { fontSize: '1.5rem' }
              }}
              InputLabelProps={{
                style: { fontSize: '1.25rem' }  // Increase label text size
              }}
            />
            <button  
            type='submit'
            className="recipe-button text-3xl font-bold text-center text-black">
              Sign Up
            </button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
