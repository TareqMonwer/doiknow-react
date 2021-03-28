import { combineReducers } from 'redux';

export const mobileProductFilterReducer = (
    state = { mobileFilterVisible: false }, action) => {
    switch (action.type) {
        case 'SHOWFILTER':
            return { mobileFilterVisible: true };
        case 'HIDEFILTER':
            return { mobileFilterVisible: false };
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    toggleFilter: mobileProductFilterReducer,
})

export default rootReducer;