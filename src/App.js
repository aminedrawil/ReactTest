import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import HomePosts from './components/HomePosts/Posts';
import Users from './components/Users/Users';

import useStyles from './styles';
import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom';

import { getUsers } from './actions/users';
import { getPostsBySearch } from './actions/posts';




const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])


    return (
        <Router>
            <div className="App">
            <Container maxwidth="lg">
                    <AppBar className={classes.appBar} position="static" color="inherit">
                        <Typography className={classes.heading} variant="h2" align="center" >Blog</Typography>
                    </AppBar>
                    <Router>
                        <Switch>
                                <Route exact path="/Home"><HomePosts /></Route>
                                <Route exact path="/Users"><Users /></Route>
                        </Switch>
                    </Router>
                </Container>
            </div>
        </Router>
    );
}

export default App;