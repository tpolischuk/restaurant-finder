import React from 'react';
import RestaurantMap from './RestaurantMap';
import RestaurantDetailContact from './RestaurantDetailContact';

const RestaurantDetail = ({ restaurant, transition }) => {
    if (!restaurant) {
        return <div>Loading...</div>;
    }

    let classes = `restaurant-detail ${transition ? 'transitioning' : 'transitioned'}`

    return (
        <div className={classes}>
            <RestaurantMap className="google-map"
                address={restaurant.location.address} />
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