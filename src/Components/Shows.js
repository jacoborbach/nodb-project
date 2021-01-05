import React, { Component } from 'react';

export class Shows extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: ''
        }
    }

    handleWatch = () => {
        //e.preventDeafult();
        const { show, watchFn } = this.props
        let watchedShow = {
            id: show.id,
            img: show.img,
            name: show.name,
            rating: this.state.inputVal
        }

        watchFn(watchedShow)
    }

    handleChange = (e) => {
        this.setState({ inputVal: e.target.value })
    }

    render() {
        //console.log(this.props)
        //console.log(this.state.inputVal)
        let { show } = this.props;
        return (
            <div className="show">
                <h4 style={{ marginBottom: 5, fontSize: 14 }}>{show.name}</h4>
                <img src={show.img} alt={show.img}></img>
                <input type='number' min='1' max='5' onChange={(e) => this.handleChange(e)} placeholder="Rate this show" value={this.state.inputVal}></input>
                <button onClick={this.handleWatch}>Watch Show</button>
                {/* <form>

                </form> */}

            </div>
        )
    }
}

export default Shows


