import React, { Component } from 'react';
import { connect } from 'react-redux';

import LapList from './LapList';
import ButtonModes from './ButtonModes';

class App extends Component {
    renderTime(counter) {
        let centiSeconds = counter;
        const hours = Math.floor(centiSeconds / 360000);
        centiSeconds = centiSeconds - 360000 * hours;
        const minutes = Math.floor(centiSeconds / 6000);
        centiSeconds = centiSeconds - 6000 * minutes;
        const seconds = Math.floor(centiSeconds / 100);
        centiSeconds = centiSeconds - 100 * seconds;
        return <h2>{`0${hours}`.slice(-2) + ':' +
            `0${minutes}`.slice(-2) + ':' +
            `0${seconds}`.slice(-2) + '.'}
            <small>
                {`0${centiSeconds}`.slice(-2)}
            </small>
        </h2>;
    }

    render() {
        return (
            <div>
                <h1>Stopwatch</h1>
                {this.renderTime(this.props.counter)}
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