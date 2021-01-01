import React, { Component } from 'react';
import Shows from './Shows';

export class AvailableShows extends Component {
    render() {
        const mappedShows = this.props.availableShows.map(show => {
            return (
                <div>
                    <Shows show={show} key={show.id} watchFn={this.props.watchFn} />
                </div>
            )
        })
        //console.log(this.props)
        return (
            <div className="availableShows">
                {mappedShows}
            </div>
        )
    }
}

export default AvailableShows
