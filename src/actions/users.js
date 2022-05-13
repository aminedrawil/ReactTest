import * as api from "../api" ;

export const getUsers = () => async (dispatch) => {
    try {

        const data = await api.fetchUsers();
        dispatch({type : 'FETCH_ALL' , data });

    } catch (error) {
        console.log(error.message)
    }
}