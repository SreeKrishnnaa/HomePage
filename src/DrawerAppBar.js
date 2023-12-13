import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function DrawerAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hound Vault
            </Typography>
          </IconButton>

          <div>
            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Home</Button>
            </a>
            <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">About</Button>
            </a>
            <a href="/use-cases" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Use Cases</Button>
            </a>
            <a href="/signin" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Signin</Button>
            </a>
            <a href="/login" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Login</Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
