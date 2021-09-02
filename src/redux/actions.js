import { INC, DEC, CHE } from './types'

export function inc () {
    return {
        type: INC
    }
}

export function dec () {
    return {
        type: DEC
    }
}

export function che (theme) {
    return {
        type: CHE,
        dataTheme: theme
    }
}