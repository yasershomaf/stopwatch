import React, { Component } from 'react';
import { connect } from 'react-redux';

import LapList from './LapList';
import ButtonModes from './ButtonModes';
import counterToTime from '../counterToTime';

class App extends Component {
    render() {
        const time = counterToTime(this.props.counter);
        return (
            <div className = 'container'>
                <h1>Stopwatch</h1>
                <h2>
                    {time.slice(0, -2)}
                    <small>
                        {time.slice(-2)}
                    </small>
                </h2>
                <ButtonModes />
                <LapList />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

export default connect(mapStateToProps) (App);