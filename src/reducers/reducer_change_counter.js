import { CHANGE_COUNTER, CHANGE_MODE, RESET } from '../actions';

export default function(state = 0, action) {
    if (action.type === CHANGE_MODE) {
        if (action.mode === RESET) {
            return 0;
        }
    }
    else if (action.type === CHANGE_COUNTER) {
        return state + 1;
    }
    return state;
}