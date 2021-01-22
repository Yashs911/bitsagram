import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import bitsagram from '../../images/bitsagram.svg';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" variant="h5" color="inherit" noWrap className={classes.title}>
            BITSAGRAM
          </Typography>
          <img className={classes.image} src={bitsagram} alt="icon" height="30" />
        </div>
          {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button className={classes.button} component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;