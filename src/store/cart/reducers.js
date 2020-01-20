import { combineReducers } from "redux";


function items(state = [], { type, action } ) {
    switch(type) {
        default: {
            return state;
        }
    }
};

export default combineReducers({
    items
})
