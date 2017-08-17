import React, { Component } from 'react';
import { connect } from 'react-redux';

import StopwatchIsReset from './StopwatchIsReset';
import StopwatchIsPaused from './StopwatchIsPaused';
import StopwatchIsStarted from './StopwatchIsStarted';
import { START, PAUSE } from '../actions';

class ButtonModes extends Component {
    render() {
        switch (this.props.mode) {
            case PAUSE:
                return <StopwatchIsPaused />;
            case START:
                return <StopwatchIsStarted />;
            default:
                return <StopwatchIsReset />;
        }
    }
}

function mapStateToProps(state) {
    return {
        mode: state.mode,
        counter: state.counter
    };
}

export default connect(mapStateToProps) (ButtonModes);