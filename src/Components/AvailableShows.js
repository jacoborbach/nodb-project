import React, { Component } from 'react';
import Shows from './Shows';
import axios from 'axios';

export class AvailableShows extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
        }
    }

    render() {
        //console.log(this.state.availableShows)
        let { availableShows } = this.props;

        let mappedShows = !this.props.searchResults === [] ? (
            this.props.searchResults.map(element => {
                return (
                    <div>
                        <h2>{element.name}</h2>
                        <div>{console.log('1')}</div>
                    </div>

                )
            })
        )
            : (
                availableShows.map(element => {
                    return (
                        <div>
                            <Shows show={element} key={element.id} watchFn={this.props.watchFn} />
                            <div>{console.log('2')}</div>
                        </div>
                    )
                })
            )

        console.log(this.props.searchResults)
        return (
            <div className="availableShows">
                {/* conditional rendering */}

                { mappedShows}
            </div>
        )
    }
}

export default AvailableShows
