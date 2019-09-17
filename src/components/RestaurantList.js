import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ restaurants, onRestaurantSelect }) => {

    const renderedRestaurants = restaurants.map((restaurant) => {
        return (
            <RestaurantItem
                key={restaurant.name}
                restaurant={restaurant}
                onRestaurantSelect={onRestaurantSelect} />
        );

    });


    return (
        <div>
            {renderedRestaurants}
        </div>
    );

}

export default RestaurantList;