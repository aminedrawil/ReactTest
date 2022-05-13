import React, { useState, useEffect, Component } from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Container, Grid, CircularProgress, Grow , Paper , AppBar , TextField , Button } from '@material-ui/core';
import { getPostsBySearch } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getPosts } from '../../actions/posts';
import { useLocation } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Posts = () => {
   
    const dispatch = useDispatch();
    const [isLoaded,setIsLoaded]=useState();
    const query = useQuery();
    console.log(query)
    const history = useHistory();
    const searchQuery = query.get('searchQuery');
    const [search,setSearch]= useState('');
    console.log(search);

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    

    const handleKeyPress = (e) => {
        if (e.keyCode === 13 ) {
          searchPost();
        }
    }

    useEffect(() => {
        dispatch(getPosts())
        setIsLoaded(true);
    }, [dispatch])

    const searchPost = () => {
        if (search.trim()) {
            dispatch(getPostsBySearch(search));
            history.push(`/posts/search?searchQuery=${search||'none'}`)
            window.location.reload();
        } else {
            history.push('/Home')
        }
    }


    
 



    return (

        !posts.data ? <CircularProgress aria-busy={isLoaded} /> : (
            <Grow in>
                <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="st" spacing={3} >
                    <AppBar className={classes.appBarSearch} position="static" color="inherit" >
                    <TextField
                    name="search"
                    variant="outlined"
                    label="SearchPosts"
                    onKeyPress={handleKeyPress}
                    fullWidth
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                    />
                    <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained" >Search</Button>
                    </AppBar>
                    </Grid>
                    <Grid container justify="space-between" alignItems="st" spacing={3}  xs ={12} sm={12}>
                        {posts.data.map((post) => (
                            <Grid key={post.id} item xs={12} sm={4}>
                                <Post post={post} />
                            </Grid>
                        ))}
                    </Grid>
                    
                   
                </Container>
            </Grow>
        )
    );
}

export default Posts;