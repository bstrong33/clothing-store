import React, { Component } from 'react';
import axios from 'axios';

class WomenShirts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shirts: {clothes: []}
        }
    }

    componentDidMount() {
        this.getShirts()
    }

    getShirts = () => {
        axios.get('/api/womenshirts').then(res => {
            this.setState({
                shirts: res.data
            })
        })
    }

    render() {
        let mappedShirts = this.state.shirts.clothes.map(shirt => {
            return (
                <div key={shirt.id}>
                    <img src={shirt.img_url} alt='' />
                    <p>{shirt.name}</p>
                    <p>{shirt.price}</p>
                </div>
            )
        })

        return (
            <div>
                <p>Shirts</p>
                {mappedShirts}
            </div>
        )
    }
}

export default WomenShirts;