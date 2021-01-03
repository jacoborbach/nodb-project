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
        return (
            <div onClick={this.handleWatch} className="showProps">
                <h4 style={{ marginBottom: 5, fontSize: 14 }}>{this.props.show.name}</h4>
                <img src={this.props.show.img} alt={this.props.show.img}></img>

                {/* <button>Watch Show</button> */}
            </div>
        )
    }
}

export default Shows


