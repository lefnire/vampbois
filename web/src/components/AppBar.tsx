import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NameButton from './NameButton'

export default function ButtonAppBar() {
  const people = [
    {name: "Scott", pdf: "scott.pdf"},
    {name: "Kurt", pdf: "kurt.pdf"},
    {name: "Tyler", pdf: "tyler.pdf"},
    {name: "Mario", pdf: "mario.pdf"},
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vampire the Masquerade
          </Typography>
          {people.map((person) => <NameButton name={person.name} pdf={person.pdf} />)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
