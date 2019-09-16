import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar light expand="md" className="justify-content-between">
                    <span className=""></span>
                    <NavbarBrand href="/" className="text-center">Lunch Tyme</NavbarBrand>
                    <img alt="map" className="map-icon" src="/images/icon_map@2x.png" />
                </Navbar>
            </div >
        );
    }
}