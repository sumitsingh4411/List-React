import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" style={{ fontFamily:'Optima, sans-serif',  fontWeight:'bolder' }}>
            List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
