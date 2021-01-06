import React, { Component } from 'react'

export class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
            toggleView: false
        }
    }

    handleClick = () => {
        const { result, watchFn } = this.props
        let watchedShow = {
            id: result.id,
            img: result.picture,
            name: result.name,
            rating: this.state.inputVal
        }

        watchFn(watchedShow)
    }

    handleChange = (e) => {
        this.setState({ inputVal: e.target.value })
    }

    handleToggle = () => {
        this.setState({ toggleView: !this.state.toggleView })
    }

    render() {
        // let { result } = this.props;
        //console.log(this.props)
        let mappedResults = this.props.result.locations.map((element, i) => {
            return (
                <div>
                    <a href={element.url} target="_blank" rel="noreferrer">
                        <img src={element.icon} alt={element.icon} style={{ height: 25, width: 50, backgroundColor: 'whitesmoke', margin: 4 }} ></img>
                    </a>

                </div>
            )
        })
        return (
            <div className="show">
                <h4>{this.props.result.name}</h4>
                <img src={this.props.result.picture} alt={this.props.result.picture} style={{ height: 200, width: 300 }}></img>
                <form>
                    <label>Rate:</label>
                    <input type='number' min='1' max='5' onChange={(e) => this.handleChange(e)} placeholder="1-5" value={this.state.inputVal} className='rating'></input>
                </form>

                <div className="buttonFlex">
                    {this.state.toggleView ? (
                        <div className='watchLctns'>{mappedResults}</div>

                    ) : (
                            <div><button onClick={this.handleToggle}>Watch Locations</button></div>

                        )
                    }

                    <button onClick={this.handleClick}>Watch Me</button>
                </div>
            </div>
        )
    }
}

export default SearchResults
