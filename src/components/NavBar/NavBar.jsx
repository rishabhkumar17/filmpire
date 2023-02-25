import {
  AppBar,
  IconButton,
  Menu,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import React from 'react';

import useStyles from './styles';

function NavBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
