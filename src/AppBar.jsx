import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton sx={{ p: 0 }}>
                <Avatar alt="Stackline Logo" src="/stackline_logo.svg" />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}