import React from 'react';
import restaurants from '../api/restaurants';

import Header from './Header.js';
import Footer from './Footer.js';
import RestaurantList from './RestaurantList';

class App extends React.Component {

    state = { restaurants: [] }

    componentDidMount = async () => {
        const response = await restaurants.get('/BR_iOS_CodingExam_2015_Server/restaurants.json', {});
        this.setState({ restaurants: response.data.restaurants });
    }

    render() {
        return (
            <div>
                <Header />
                <RestaurantList restaurants={this.state.restaurants} />
                <Footer />
            </div >

        );
    }

};

export default App;