import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = (props) => {

    const restaurants = props.restaurants.map((props) => {
        return (
            <RestaurantItem
                key={props.name}
                restaurantName={props.name}
                categoryType={props.category}
                backgroundImageURL={props.backgroundImageURL} />
        );
    });


    return (
        <div className="restaurant-list col-md-6 col-sm-12">
            {restaurants}
        </div>
    );

}

export default RestaurantList;