import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, InputAdornment, IconButton } from '@mui/material';
import img from '../../assets/flag.png';
import { useNavigate } from "react-router-dom";
import '../../Menu.css';
import ClearIcon from '@mui/icons-material/Clear';
import { useAuth } from '../../Auth/AuthContext';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { isMya, setIsMya } = useAuth();
  const [loading, setLoading] = useState(false)

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

    if (!formValues.name) {
      tempErrors.name = isMya ? "နာမည်လိုအပ်သည်" : "Name is required";
    } else if (!/^[a-zA-Z\s-]+$/.test(formValues.name)) {
      tempErrors.name = isMya
        ? "နာမည်တွင်စာလုံးများသာ ပါဝင်ရမည်"
        : "Name must only contain letters";
    }

    if (!formValues.phone) {
      tempErrors.phone = isMya ? "ဖုန်းနံပါတ်လိုအပ်သည်" : "Phone is required";
    } else if (!/^\d{11}$/.test(formValues.phone)) {
      tempErrors.phone = isMya
        ? "ဖုန်းနံပါတ်သည် အမှန်တစ်ကယ် ၁၁ လုံးရှိရမည်"
        : "Phone must be exactly 11 digits";
    }
  
    if (!formValues.email) {
      tempErrors.email = isMya ? "အီးမေးလ်လိုအပ်သည်" : "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = isMya ? "အီးမေးလ်မမှန်ကန်ပါ" : "Email is invalid";
    }

    if (!formValues.password) {
      tempErrors.password = isMya ? "စကားဝှက်လိုအပ်သည်" : "Password is required";
    } else if (formValues.password.length < 6) {
      tempErrors.password = isMya
        ? "စကားဝှက်သည် အနည်းဆုံး ၆ လုံးရှိရမည်"
        : "Password should be at least 6 characters long";
    }
  
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  const signUp = async (formData) => {
    setLoading(true)

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
        setFormValues({
          name: '',
          phone: '',
          email: '',
          password: ''
        });
        localStorage.removeItem('formValues');
        alert("Sign Up successful");
        navigate('/login');
      } else {
        console.error('Sign-up error', data);
        alert(`Sign Up failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('An error occurred during sign-up', error);
      alert('An error occurred during sign-up. Please try again.');
    }
    setLoading(false)
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
            width="600px"
            height="600px"
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
          <h2 className="primary title1">
            {isMya ? "Myanmar Cuisineမှကြိုဆိုပါတယ်" : "Welcome To Our Myanmar Cuisine.."}
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
            <TextField
              name="name"
              variant="outlined"
              fullWidth
              label={isMya?'နာမည်':'Name'}
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
              label={isMya?'ဖုန်းနံပါတ်':'Phone'}
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
              label={isMya?'အီးမေးလ်':'Email'}
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
              label={isMya?'လျှို့ဝှက်နံပါတ်':'Password'}
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
              className="recipe-button font-bold text-center text-black title3">
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 16h2v4H2zm2-6h2v6H4zm2-6h2v6H6zm2-4h2v4H8z"
                    ></path>
                  </svg>
                  {isMya ? "တင်နေသည်..." : "Loading..."}
                </div>
              ) : (
                isMya ? "စာရင်းသွင်းရန်" : "Sign Up"
              )}

            </button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
