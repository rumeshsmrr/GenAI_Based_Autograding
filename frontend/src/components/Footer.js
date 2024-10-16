import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: 'primary.main',
      color: 'white',
      p: 2,
      textAlign: 'center',
    }}
  >
    <Typography variant="body2">
      &copy; 2024 SLIIT. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
