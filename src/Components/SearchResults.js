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
        let mappedResults = this.props.result.locations.map((element, i) => {
            return (
                <div>
                    <a href={element.url} target="_blank" rel="noreferrer">
                        <img src={element.icon} alt={element.icon} style={{ height: 50, width: 50, backgroundColor: 'white', margin: 4 }} ></img>
                    </a>

                </div>
            )
        })
        return (
            <div className="show">
                <h4>{this.props.result.name}</h4>
                <img src={this.props.result.picture} alt={this.props.result.picture} style={{ height: 200, width: 300 }}></img>
                <div className="buttonFlex">
                    {mappedResults}
                    <button onClick={this.handleClick}>Watch Me</button>
                </div>
            </div>
        )
    }
}

export default SearchResults
