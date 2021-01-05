import React, { Component } from 'react'

export class Header extends Component {
    handleClick = () => {
        this.props.clearFn()
    }

    render() {
        //console.log(this.props)
        return (
            <header className='header'>
                <div>Cinema</div>
                <div></div>
                <div onClick={this.handleClick}>Home</div>
            </header>
        )
    }
}

export default Header
