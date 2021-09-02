import { INC, DEC, CHE } from "./types";
import { combineReducers } from "redux";

export function countReduc (state = 0, action) {

    switch (action.type) {
        case INC: 
            return state + 1;
        case DEC: 
            return state - 1;
        default: 
            return state
    }
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themReduc (state = initialThemeState, action) {
    switch (action.type) {
        case CHE: 
            return {...state, theme: action.dataTheme};
        default: 
            return state
    }
}



export const rootReduc = combineReducers({
    count: countReduc,
    theme: themReduc
})