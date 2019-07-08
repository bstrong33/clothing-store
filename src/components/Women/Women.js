import React, { Component } from 'react';
import WomenSideNav from './WomenSideNav';
import WomenShirts from './WomenShirts';
import WomenPants from './WomenPants';
import WomenAccessories from './WomenAccessories';

class Women extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedClothes: ''
        }
    }

    updateDisplay = (clothingType) => {
        this.setState({
            displayedClothes: clothingType
        })
    }

    render(){
        return (
            <div>
                <h3>Women</h3>
                <WomenSideNav updateFn={this.updateDisplay} />
                {this.state.displayedClothes === 'shirt' ? <WomenShirts /> : null}
                {this.state.displayedClothes === 'pants' ? <WomenPants /> : null}
                {this.state.displayedClothes === 'accessories' ? <WomenAccessories /> : null}
            </div>
        )
    } 
}

export default Women;