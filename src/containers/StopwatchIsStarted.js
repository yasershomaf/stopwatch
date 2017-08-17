import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeMode, changeCounter, changeLapList, PAUSE } from '../actions';

class StopwatchIsStarted extends Component {
    constructor() {
        super();
        let interval;
    }

    componentDidMount() {
        this.interval = setInterval(() => this.props.changeCounter(), 10);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <button onClick = {() => this.props.changeMode(PAUSE)}>Pause</button>
                <button
                    onClick = {() => this.props.changeLapList(this.props.currentCounter)}>
                    Lap
                </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeMode: changeMode,
        changeCounter: changeCounter,
        changeLapList: changeLapList
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        currentCounter: state.counter
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (StopwatchIsStarted);