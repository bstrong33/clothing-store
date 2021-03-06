import React, { Component } from 'react';
import axios from 'axios';

class WomenPants extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pants: {clothes: []}
        }
    }

    componentDidMount() {
        this.getPants()
    }

    getPants = () => {
        axios.get('/api/womenpants').then(res => {
            this.setState({
                pants: res.data
            })
            console.log(this.state.pants)
        })
    }

    render() {
        let mappedPants = this.state.pants.clothes.map(pant => {
            return (
                <div key={pant.id}>
                    <button><img src={pant.img_url} alt='' /></button>
                    <p>{pant.name}</p>
                    <p>{pant.price}</p>
                </div>
            )
        })

        return (
            <div>
                <p>Pants</p>
                {mappedPants}
            </div>
        )
    }
}

export default WomenPants;