import React, { Component } from 'react';

class MenSideNav extends Component {

    render() {
        return (
            <div>
                <button onClick={() => {this.props.updateFn('shirt')}}>Shirts</button>
                <button onClick={() => {this.props.updateFn('pants')}}>Pants</button>
                <button onClick={() => {this.props.updateFn('accessories')}}>Accessories</button>
            </div>
        )
    }
}

export default MenSideNav;