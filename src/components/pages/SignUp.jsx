
import React,{ useState } from 'react';
import img from '../../assets/b979662260ef514033b369b4a90e3bac.jpg'
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material'


const SignUp = () => {
  const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
      });

      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
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
        }
      };
  return (
    <Container 
     maxWidth="max-w-lg"
     className="flex items-center justify-center min-w-full min-h-screen bg-yellow-400 p-8">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <div className="flex bg-white shadow-lg rounded-lg 
          overflow-hidden max-w-4xl w-full">
            <div class="flex justify-center items-center space-x-4 relative group">
              <img src={img} 
              className="object-cover w-full h-full 
              transition-transform duration-500 group-hover:scale-105
               group-hover:blur-sm"/>
                <div className="absolute inset-0  bg-opacity-25
                 transition-opacity duration-500 opacity-0
                  group-hover:opacity-100 "></div>
            </div>
            <div className=" p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      variant="outlined"
                      fullWidth
                      label="Name"
                      value={formValues.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Grid>
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
                      name="email"
                      variant="outlined"
                      fullWidth
                      label="Email Address"
                      value={formValues.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
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
                <div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 3 }}
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div >
        </Box>
        </Container>
        );
};

        export default SignUp;
