import React, { Component } from 'react'

export class Header extends Component {
    handleClick = () => {
        this.props.clearFn()
    }

    render() {
        //console.log(this.props)
        return (
            <header className='header'>
                <div onClick={this.handleClick}>Cinema</div>
                <div></div>
                <div></div>
            </header>
        )
    }
}

export default Header
