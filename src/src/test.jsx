// src/components/TestScreen.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const TestScreen = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h4" color="primary">
        Test Screen
      </Typography>
      <Typography variant="body1" color="textSecondary">
        This is a test screen to verify routing and component rendering.
      </Typography>
    </Box>
  );
};

export default TestScreen;
