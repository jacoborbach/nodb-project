import React, { Component } from 'react';
import Shows from './Shows';
import axios from 'axios';

export class AvailableShows extends Component {
    constructor() {
        super();
        this.state = {
            availableShows: []
        }
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        axios.get('/api/available-shows')
            .then(res => this.setState({
                availableShows: res.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        let { availableShows } = this.state;
        const mappedShows = availableShows.map(show => {
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
