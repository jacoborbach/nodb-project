import React, { Component } from 'react';
import Shows from './Shows';

export class AvailableShows extends Component {
    render() {
        const mappedShows = this.props.availableShows.map((show, i) => {
            return (
                <div>
                    <Shows show={show} key={i} watchFn={this.props.watchFn} />
                </div>
            )
        })
        return (
            <div className="availableShows">
                {mappedShows}
            </div>
        )
    }
}

export default AvailableShows
