import { CHANGE_MODE, CHANGE_LAP_LIST, RESET } from '../actions';

export default function(state = [], action) {
    if (action.type === CHANGE_MODE) {
        if (action.mode === RESET) {
            return [];
        }
    }
    else if (action.type === CHANGE_LAP_LIST) {
        return state.concat(action.currentCounter);
    }
    return state;
}