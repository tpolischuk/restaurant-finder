import React from 'react';
import RestaurantMap from './RestaurantMap';
import RestaurantDetailContact from './RestaurantDetailContact';

const RestaurantDetail = ({ restaurant }) => {
    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div className="restaurant-detail">
            <RestaurantMap className="google-map" lat={restaurant.location.lat} lng={restaurant.location.lng} address={restaurant.location.address} />
            <div className="restaurant-detail-meta">
                <h3>{restaurant.name}</h3>
                <h4>{restaurant.category}</h4>
            </div>

            <div className="restaurant-detail-contact">
                <div className="restaurant-detail-address">
                    {restaurant.location.address}<br />
                    {restaurant.location.city}, {restaurant.location.state} {restaurant.location.postalCode}
                </div>

                <RestaurantDetailContact contact={restaurant.contact} />

            </div>
        </div>
    );

}

export default RestaurantDetail;