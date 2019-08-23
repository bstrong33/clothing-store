import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenSideNav from './MenSideNav';
import MenShirts from './MenShirts';
import MenPants from './MenPants';
import MenAccessories from './MenAccessories';
import { updateCart } from './../../ducks/reducer';

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
                {this.state.displayedClothes === 'shirt' ? <MenShirts updateCart={this.props.updateCart}/> : null}
                {this.state.displayedClothes === 'pants' ? <MenPants updateCart={this.props.updateCart}/> : null}
                {this.state.displayedClothes === 'accessories' ? <MenAccessories updateCart={this.props.updateCart}/> : null}
            </div>
        )
    } 
}

function mapStateToProps(state) {
    return {...state}
}

export default connect(mapStateToProps, { updateCart })(Men);