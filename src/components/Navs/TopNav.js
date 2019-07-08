import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {

    render() {
        return (
            <div>
                <Link to='/'><button>The Clothing Store</button></Link>
                <Link to='/Men'><button>Men</button></Link>
                <Link to='/Women'><button>Women</button></Link>
            </div>
        )
    }
}

export default TopNav;