import { CHANGE_MODE, RESET } from '../actions';

export default function(state = RESET, action) {
    if (action.type === CHANGE_MODE) {
        return action.mode;
    }
    return state;
}