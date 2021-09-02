import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from "./_types"

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function enableButtons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function disableButtons() {
    return {
        type: DISABLE_BUTTONS
    }
}

export function asyncIncrement() {
    return function(dispatch) {   
        dispatch(disableButtons())
        setTimeout(() => {
            dispatch(enableButtons())
            dispatch(increment())
        }, 2000)
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME, 
        payload: newTheme
    }
}