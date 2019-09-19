import React from 'react';

const RestaurantDetailContact = (restaurant) => {

    let twitter;

    if (restaurant.contact && restaurant.contact.twitter) {
        twitter = '@' + restaurant.contact.twitter;
    } else {
        twitter = 'No twitter account found'
    }

    if (restaurant.contact != null) {
        return (
            <div>
                <div className="restauarant-detail-phone">
                    <p>{restaurant.contact.formattedPhone}</p>
                </div>

                <div className="restaurant-detail-twitter">
                    <p>{twitter}</p>
                </div>
            </div>
        )

    } else {
        return (
            <div>No contact information found</div>
        )
    }

}

export default RestaurantDetailContact;