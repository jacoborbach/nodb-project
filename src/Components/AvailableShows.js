import React, { Component } from 'react';
import Shows from './Shows';

export class AvailableShows extends Component {
    render() {
        const mappedShows = this.props.availableShows.map((show, i) => {
            return (
                <div>
                    <Shows show={show} key={i} />
                </div>
            )
        })
        return (
            <div>
                {mappedShows}
            </div>
        )
    }
}

export default AvailableShows
