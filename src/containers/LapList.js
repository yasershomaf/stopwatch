import React, { Component } from 'react';
import { connect } from 'react-redux';

class LapList extends Component {
    renderLapList() {
        const lapListItems = this.props.lapList.map((lapListItem, index) => {
            let centiSeconds = lapListItem;
            const hours = Math.floor(centiSeconds / 360000);
            centiSeconds = centiSeconds - 360000 * hours;
            const minutes = Math.floor(centiSeconds / 6000);
            centiSeconds = centiSeconds - 6000 * minutes;
            const seconds = Math.floor(centiSeconds / 100);
            centiSeconds = centiSeconds - 100 * seconds;
            return(
                <option key = {index}>{`${index + 1} - ` +
                    `0${hours}`.slice(-2) + ':' +
                    `0${minutes}`.slice(-2) + ':' +
                    `0${seconds}`.slice(-2) + '.' +
                    `0${centiSeconds}`.slice(-2)}
                </option>
            );
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