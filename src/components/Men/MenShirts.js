import React, { Component } from 'react';
import axios from 'axios';

class MenShirts extends Component {
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
    axios.get('/api/menshirts').then(res => {
        this.setState({
            shirts: res.data
        })
        console.log(this.state.shirts)
    })
}
    render() {
        let mappedShirts = this.state.shirts.clothes.map(shirt => {
            return (
                <div key={shirt.id}>
                    <img src={shirt.img_url} />
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

export default MenShirts;