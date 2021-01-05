import React, { Component } from 'react'

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: ''
        }
    }

    handleClick = (e) => {
        this.props.searchFn(this.state.inputVal)
        this.setState({ inputVal: '' })
    }

    handleChange = (val) => {
        this.setState({ inputVal: val })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        //console.log(this.state.inputVal)
        //console.log(this.props)
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.inputVal} placeholder="Search Here" onChange={(e) => this.handleChange(e.target.value)}></input>
                    <button onClick={(e) => this.handleClick(e)}>Search</button>
                </form>
            </div>
        )
    }
}

export default Search
