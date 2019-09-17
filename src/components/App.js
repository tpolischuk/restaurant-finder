import React from 'react';
import restaurants from '../api/restaurants';

import Header from './Header.js';
import Footer from './Footer.js';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';

class App extends React.Component {

    state = {
        restaurants: [],
        selectedRestaurant: null
    };

    componentDidMount = async () => {
        const response = await restaurants.get('/BR_iOS_CodingExam_2015_Server/restaurants.json', {});
        this.setState({ restaurants: response.data.restaurants });
        this.setState({ selectedRestaurant: response.data.restaurants[0] })
    }

    onRestaurantSelect = (restaurant) => {
        this.setState({ selectedRestaurant: restaurant });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-md-6">
                        <RestaurantList
                            restaurants={this.state.restaurants}
                            onRestaurantSelect={this.onRestaurantSelect} />
                    </div>
                    <div className="col-md-6">
                        <RestaurantDetail restaurant={this.state.selectedRestaurant} />
                    </div>
                </div>
                <Footer />
            </div >

        );
    }

};

export default App;