import React, { Component } from 'react';
import { connect } from 'react-redux';

import counterToTime from '../counterToTime';

class LapList extends Component {
    renderLapList() {
        let counterDifference = 0;
        const lapListItems = this.props.lapList.map((lapListItem, index) => {
            const time = counterToTime(lapListItem);
            const timeDifference = counterToTime(lapListItem - counterDifference);
            counterDifference = lapListItem;
            return <option>
                {`${index + 1} - ${time.HHMMSS}${time.CS} - - - -
                ${timeDifference.HHMMSS}${timeDifference.CS}`}
            </option>
        });
        return lapListItems;
    }
    render() {
        return (
            <select size = {20}>
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