import React, { Component } from 'react'

export class SearchResults extends Component {

    handleClick = () => {
        const { result, watchFn } = this.props
        let watchedShow = {
            id: result.id,
            img: result.picture,
            name: result.name
        }

        watchFn(watchedShow)
    }

    render() {
        // let { result } = this.props;
        //console.log(this.props)
        return (
            <div className="show">
                <h4>{this.props.result.name}</h4>
                <img src={this.props.result.picture} alt={this.props.result.picture} style={{ height: 200, width: 300 }}></img>
                <button onClick={this.handleClick}>Watch Me</button>
            </div>
        )
    }
}

export default SearchResults
