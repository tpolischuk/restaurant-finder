import React from 'react';

const gradient = './images/cellGradientBackground@2x.png';

const RestaurantItem = ({ restaurant, onRestaurantSelect }) => {

    return (
        <div
            className="restaurant-item-container"
            style={{
                backgroundImage: `url(${restaurant.backgroundImageURL})`,

            }}
            onClick={() => onRestaurantSelect(restaurant)}>
            <div
                className="restaurant-item d-flex align-items-end"
                style={{
                    backgroundImage: `url(${gradient})`
                }}>
                <div className="restaurant-meta">
                    <h3>{restaurant.name}</h3>
                    <h4>{restaurant.category}</h4>
                </div>
            </div>
        </div >
    );

}

export default RestaurantItem;