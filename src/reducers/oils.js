export default (state = [], action) => {
    switch(action.type) {
        case 'GET_OILS_SUCCESS':
            return action.oils;
        case 'CREATE_OIL_SUCCESS':
            return state.concat(action.oil);
        case 'GET_OIL_SUCCESS':
            return action.oil;
        case 'DELETE_OIL_SUCCESS':
            return state.filter(oil => oil.id !== action.oil.id);
        default:
            return state;
    }
}