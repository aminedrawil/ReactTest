import * as api from "../api" ;

export const getPosts = () => async (dispatch) => {
    try {

        const data = await api.fetchPosts();
        dispatch({type : 'FETCH_ALL' , data });

    } catch (error) {
        console.log(error.message)
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {

        const data = await api.fetchPostsBySearch(searchQuery);
        dispatch({type : 'FETCH_BY_SEARCH' , data });
    } catch (error) {
        console.log(error.message)
    }
};