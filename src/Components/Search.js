import React, { Component } from 'react'

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: ''
        }
    }

    handleClick = () => {
        this.props.searchFn(this.state.inputVal)
    }

    handleChange = (val) => {
        this.setState({ inputVal: val })
    }

    render() {
        //console.log(this.state.inputVal)
        //console.log(this.props)
        return (
            <div className="search">
                <input value={this.state.inputVal} placeholder="Search Here" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button onClick={this.handleClick}>Search</button>
            </div>
        )
    }
}

export default Search
