export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_BY_SEARCH':
            console.log(action)
            return action;
        case 'FETCH_ALL':
            return action ;
        default:
            return posts;
    }
}