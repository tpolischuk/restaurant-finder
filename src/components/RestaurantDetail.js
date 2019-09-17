import React from 'react';

const RestaurantDetail = ({ restaurant }) => {
    if (!restaurant) {
        return <div>Loading...</div>;
    }

    console.log(restaurant);

    return (
        <div className="restaurant-detail">
            <img src="http://placehold.it/150x150" alt="dothhislater" />
            <h3>{restaurant.name}</h3>
            <h4>{restaurant.category}</h4>
            <p>{restaurant.location.address}</p>
            <p>{restaurant.location.state}</p>
            <p>{restaurant.location.postalCode}</p>
            <p>{restaurant.contact.formattedPhone}</p>
            <p>@{restaurant.contact.twitter}</p>

        </div>
    );

}

export default RestaurantDetail;