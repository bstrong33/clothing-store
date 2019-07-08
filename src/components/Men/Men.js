import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Men extends Component {

    render(){
        return (
            <div>
                <h3>Men</h3>
                <div>
                    <Link to='/Men/MenShirts'><button>Shirts</button></Link>
                    <button>Pants</button>
                    <button>Accessories</button>
                </div>
            </div>
        )
    } 
}

export default Men;