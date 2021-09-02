import { INC, DEC, SYNC, CHANGE_THEME } from "./types"

export function inc() {
    return {
        type: INC
    }
}

export function dec() {
    return {
        type: DEC
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        data: newTheme
    }
}