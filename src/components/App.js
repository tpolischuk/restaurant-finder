import React from 'react';
import restaurants from '../api/restaurants';

import Header from './Header.js';
import Footer from './Footer.js';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';

class App extends React.Component {

    state = {
        restaurants: [],
        selectedRestaurant: null,
        transition: false
    };

    componentDidMount = async () => {
        const response = await restaurants.get('/BR_iOS_CodingExam_2015_Server/restaurants.json', {});
        this.setState({ restaurants: response.data.restaurants });
        this.setState({ selectedRestaurant: response.data.restaurants[0] });
    }

    onRestaurantSelect = (restaurant) => {
        if (this.state.selectedRestaurant !== restaurant) {
            this.setState({ selectedRestaurant: restaurant });

            this.setState(({ transition: true }))

            setTimeout(function () {
                this.setState(({ transition: false }))
            }.bind(this), 400);
        }
    };

    render() {
        return (
            <div>
                <Header />
                <div className="d-flex main-container">
                    <div className="flex-fill restaurant-list">
                        <RestaurantList
                            restaurants={this.state.restaurants}
                            onRestaurantSelect={this.onRestaurantSelect} />
                    </div>
                    <div className="flex-fill flex-grow-1 restaurant-detail-container">
                        <RestaurantDetail transition={this.state.transition} restaurant={this.state.selectedRestaurant} />
                    </div>
                </div>
                <Footer />
            </div >

        );
    }

};

export default App;