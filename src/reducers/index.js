import { combineReducers } from 'redux';

import mode from './reducer_change_mode';
import counter from './reducer_change_counter';
import lapList from './reducer_change_lap_list';

const rootReducer = combineReducers({
    mode: mode,
    counter: counter,
    lapList: lapList
});

export default rootReducer;