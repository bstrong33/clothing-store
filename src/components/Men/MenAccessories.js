import React, { Component } from 'react';
import axios from 'axios';

class MenAccessories extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            accessories: {clothes: []}
        }
    }

    componentDidMount() {
        this.getAccessories()
    }

    getAccessories = () => {
        axios.get('/api/menaccessories').then(res => {
            this.setState({
                accessories: res.data
            })
        })
    }

    render() {
        let mappedAccessories = this.state.accessories.clothes.map(accessory => {
            return (
                <div key={accessory.id}>
                    <button><img src={accessory.img_url} alt='' /></button>
                    <p>{accessory.name}</p>
                    <p>{accessory.price}</p>
                </div>
            )
        })

        return (
            <div>
                <p>Accessories</p>
                {mappedAccessories}
            </div>
        )
    }
}

export default MenAccessories;