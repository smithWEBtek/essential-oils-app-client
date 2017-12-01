export default (state = [], action) => {
    switch(action.type) {
        case 'GET_OILS_SUCCESS':
            return action.oils;
        case 'CREATE_OIL_SUCCESS':
            return state.concat(action.oil);

        default:
            return state;
    }
}