import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeMode, START, RESET } from '../actions';

class StopwatchIsPaused extends Component {
    render() {
        return (
            <div>
                <button onClick = {() => this.props.changeMode(START)}>Resume</button>
                <button onClick = {() => this.props.changeMode(RESET)}>Reset</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeMode: changeMode}, dispatch);
}

export default connect(null, mapDispatchToProps) (StopwatchIsPaused);