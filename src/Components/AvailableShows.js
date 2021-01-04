import React, { Component } from 'react';
import Shows from './Shows';
import axios from 'axios';

export class AvailableShows extends Component {
    constructor() {
        super();
        this.state = {
            availableShows: [],
            inputVal: ''
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

    // get('/api/utelly-data/inputVal')

    render() {
        //console.log(this.state.availableShows)
        let { availableShows } = this.state;
        const mappedShows = availableShows.map(element => {
            return (
                <div>
                    <Shows show={element} key={element.id} watchFn={this.props.watchFn} />
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
