import React, { Component } from 'react';
import axios from 'axios';

class MenShirts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {}
    }

componentDidMount() {
    axios.get('/api/menshirts').then(res => {
        console.log(res.data)
    })
}
    render() {
        return (
            <div>
                <p>Shirts</p>
            </div>
        )
    }
}

export default MenShirts;