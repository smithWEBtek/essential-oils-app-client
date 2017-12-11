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
        // {
        //     const newState = Object.assign([], state);
        //     const indexOfOilToDelete = state.findIndex(oil => {
        //       return oil.id === action.oil.id
        //     })
        //     newState.splice(indexOfOilToDelete, 1);
        //     return newState;
        // }
        default:
            return state;
    }
}