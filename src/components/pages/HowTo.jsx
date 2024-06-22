
import React from 'react';
import { Grid, Container } from '@mui/material';

const HowTo = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} >
          <div>Item 1</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>Item 2</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div>Item 3</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowTo;

