import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

const data = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 6' },
];

function TwoColumnGrid() {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} key={item.id}>
          <Paper elevation={2} style={{ padding: '16px' }}>
            <Typography variant="h6">{item.title}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      <TwoColumnGrid />
    </div>
  );
}

export default App;
