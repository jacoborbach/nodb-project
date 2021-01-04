import React, { Component } from 'react';

export class Shows extends Component {
    constructor() {
        super();
        this.state = {
            placeholder: 'hello'
        }
    }

    handleWatch = () => {
        const { show, watchFn } = this.props
        let watchedShow = {
            id: show.id,
            img: show.img,
            name: show.name
        }

        watchFn(watchedShow)
    }

    render() {
        //console.log(this.props)
        let { show } = this.props;
        return (
            <div className="show">
                <h4 style={{ marginBottom: 5, fontSize: 14 }}>{show.name}</h4>
                <img src={show.img} alt={show.img}></img>
                <button onClick={this.handleWatch}>Watch Show</button>
            </div>
        )
    }
}

export default Shows


