import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeMode, changeCounter, START } from '../actions';

class StopwatchIsReset extends Component {
    render() {
        return (
            <div>
                <button onClick = {() => this.props.changeMode(START)}>Start</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeMode: changeMode,
        changeCounter: changeCounter
    }, dispatch);
}

export default connect(null, mapDispatchToProps) (StopwatchIsReset);