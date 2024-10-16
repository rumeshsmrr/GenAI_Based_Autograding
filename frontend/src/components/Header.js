import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Welcome to <strong>Auto-grading System</strong>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
