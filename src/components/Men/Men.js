import React, { Component } from 'react';
import MenSideNav from './MenSideNav';
import MenShirts from './MenShirts';
import MenPants from './MenPants';
import MenAccessories from './MenAccessories';

class Men extends Component {
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
                <h3>Men</h3>
                <MenSideNav updateFn={this.updateDisplay} />
                {this.state.displayedClothes === 'shirt' ? <MenShirts /> : null}
                {this.state.displayedClothes === 'pants' ? <MenPants /> : null}
                {this.state.displayedClothes === 'accessories' ? <MenAccessories /> : null}
            </div>
        )
    } 
}

export default Men;