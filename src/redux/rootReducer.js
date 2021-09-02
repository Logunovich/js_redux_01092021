import { DEC, INC, SYNC, CHANGE_THEME } from "./types";
import { combineReducers } from "redux";

function countReducer (state = 0, action) {
    switch(action.type) {
        case INC: 
            return state + 1
        case DEC: 
            return state - 1
        default: 
            return state
    }
}

const initial = {
    theme: 'light'
}

function changeTheme (state = 'light', action) {
    switch (action.type) {
        case CHANGE_THEME: 
            return state = {...state, theme: action.data}
        default: 
            return state
    }
}

export const rootReducer = combineReducers ({
    count: countReducer,
    theme: changeTheme
});