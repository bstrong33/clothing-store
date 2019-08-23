import React, { Component } from 'react';
import axios from 'axios';

class MenShirts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            shirts: {clothes: []},
            shirtToAddToCart: {},
            toggle: 'hidden'
        }
    }

    componentDidMount() {
        this.getShirts()
    }

    getShirts = () => {
        axios.get('/api/menshirts').then(res => {
            this.setState({
                shirts: res.data
            })
        })
    }

    revealAddToCart = (shirt) => {
        this.setState({
            shirtToAddToCart: shirt,
            toggle: 'showAddToCart'
        })
        console.log(this.state.shirtToAddToCart, this.state.toggle)
    }
    
    render() {
        let mappedShirts = this.state.shirts.clothes.map(shirt => {
            return (
                <div key={shirt.id}>
                    <button onClick={() => {this.revealAddToCart(shirt)}}><img src={shirt.img_url} alt='' /></button>
                    <p>{shirt.name}</p>
                    <p>{shirt.price}</p>
                </div>
            )
        })

        return (
            <div>
                <p>Shirts</p>
                {mappedShirts}

                {this.state.toggle === 'hidden' ? null : 
                <div className={this.state.toggle}>
                    <h4>Pre-Cart</h4>
                    <h5>{this.state.shirtToAddToCart.name}</h5>
                    <h5>{this.state.shirtToAddToCart.price}</h5>
                    <img src={this.state.shirtToAddToCart.img_url} alt='' />
                    <h6>Size</h6>
                    <button>Small</button>
                    <button>Medium</button>
                    <button>Large</button>
                    <h6>Quantity</h6>
                </div>
                }
            </div>
        )
    }
}

export default MenShirts;