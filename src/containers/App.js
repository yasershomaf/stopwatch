import React, { Component } from 'react';
import { connect } from 'react-redux';

import LapList from './LapList';
import ButtonModes from './ButtonModes';
import counterToTime from '../counterToTime';

class App extends Component {
    render() {
        const time = counterToTime(this.props.counter);
        return (
            <div>
                <h1>Stopwatch</h1>
                <h2>
                    {time.HHMMSS}
                    <small>
                        {time.CS}
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