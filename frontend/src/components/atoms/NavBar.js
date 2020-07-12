import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Navbar() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>Create Wallet Pass</Typography>
        </Toolbar>
      </AppBar>
    );
  }