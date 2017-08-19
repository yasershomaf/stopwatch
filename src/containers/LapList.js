import React, { Component } from 'react';
import { connect } from 'react-redux';

import counterToTime from '../counterToTime';

class LapList extends Component {
    renderLapList() {
        let previousLap = 0;
        const lapListItems = this.props.lapList.map((lapListItem, index) => {
            const time = counterToTime(lapListItem);
            const timeDifference = counterToTime(lapListItem - previousLap);
            previousLap = lapListItem;
            return <option key = {index} selected>
                {`${index + 1} - ${time} - - - - - ${timeDifference}`}
            </option>
        });
        return lapListItems;
    }
    render() {
        return (
            <select size = {10}>
                {this.renderLapList()}
            </select>
        ) 
    }
}

function mapStateToProps(state) {
    return {
        lapList: state.lapList
    };
}

export default connect(mapStateToProps) (LapList);