export default (state = {}, action) => {
    switch(action.type) {
        case 'GET_OIL_SUCCESS':
            return action.oil;
        default:
            return state;
    }
}