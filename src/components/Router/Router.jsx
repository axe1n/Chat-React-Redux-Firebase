import { BrowserRouter, Switch, Link, Redirect } from 'react-router-dom';
import { List, ListItem, CssBaseline, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import Chats from '../Chats/Chats';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Gists from '../Gists/Gists';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Logout from '../Logout/Logout';

export default function Router() {
  const auth = getAuth();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <List sx={{ display: 'flex' }}>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <PrivateRoute authenticated={authed}>
              <ListItem>
                <Link to="/chats">Chats</Link>
              </ListItem>
              <ListItem>
                <Link to="/profile">Profile</Link>
              </ListItem>
              <ListItem>
                <Link to="/gists">Gists</Link>
              </ListItem>
            </PrivateRoute>
          </List>
          <Logout />
        </Container>

        <Switch>
          <PublicRoute exact path="/">
            <Home authenticated={authed} />
          </PublicRoute>
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute exact path="/signup">
            <SignUp />
          </PublicRoute>
          <PrivateRoute authenticated={authed} exact path="/chats">
            <Chats />
          </PrivateRoute>
          <PrivateRoute
            authenticated={authed}
            exact
            path="/chat/:id"
            render={() => <Chats />}
          ></PrivateRoute>
          <PrivateRoute authenticated={authed} path="/Profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute authenticated={authed} path="/Gists">
            <Gists />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
