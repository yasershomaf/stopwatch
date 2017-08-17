export const CHANGE_MODE = 'CHANGE_MODE';
export const CHANGE_COUNTER = 'CHANGE_COUNTER';
export const CHANGE_LAP_LIST = 'CHANGE_LAP_LIST';
export const START = 'START';
export const RESET = 'RESET';
export const PAUSE = 'PAUSE';

export function changeMode(mode) {
    return {
        type: CHANGE_MODE,
        mode: mode
    };
}

export function changeCounter() {
    return {
        type: CHANGE_COUNTER
    };
}

export function changeLapList(currentCounter) {
    return {
        type: CHANGE_LAP_LIST,
        currentCounter: currentCounter
    };
}