import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

import Octicon, { ChevronLeft } from '@primer/octicons-react'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        //For if we need a toggling nav in the future
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleBackButton() {
        let restaurantDetail = document.querySelector('.restaurant-detail');
        restaurantDetail.classList.remove('transitioned');
        restaurantDetail.classList.add('transitioning');
    }

    render() {
        return (
            <div>
                <Navbar light expand="md" className="justify-content-between fixed-top">
                    <span className="back-span" onClick={this.handleBackButton}>
                        <Octicon className="back-button" icon={ChevronLeft} />
                    </span>
                    <NavbarBrand href="/" className="text-center">Lunch Tyme</NavbarBrand>
                    <img alt="map" className="map-icon" src="/images/icon_map@2x.png" />
                </Navbar>
            </div>
        );
    }
}