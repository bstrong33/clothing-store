import React, { Component } from 'react';
import axios from 'axios';

class MenPants extends Component {
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
        axios.get('/api/menpants').then(res => {
            this.setState({
                pants: res.data
            })
        })
    }

    render() {
        let mappedPants = this.state.pants.clothes.map(pant => {
            return (
                <div key={pant.id}>
                    <img src={pant.img_url} alt='' />
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

export default MenPants;