import React from 'react';

const gradient = './images/cellGradientBackground@2x.png';

const RestaurantItem = (props) => {

    return (
        <div
            className="restaurant-item-container"
            style={{
                backgroundImage: `url(${props.backgroundImageURL})`,

            }}>
            <div
                className="restaurant-item d-flex align-items-end"
                style={{
                    backgroundImage: `url(${gradient})`
                }}>
                <div className="restaurant-meta">
                    <h3>{props.restaurantName}</h3>
                    <h4>{props.categoryType}</h4>
                </div>
            </div>
        </div >
    );

}

export default RestaurantItem;