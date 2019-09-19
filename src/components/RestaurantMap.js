import React from 'react';

class RestaurantMap extends React.Component {

    render() {

        const baseUrl = 'https://www.google.com/maps/embed/v1/';

        const key = 'AIzaSyBidT_Cz8djhXm8ngMM1-4oAqCWT0iwh24';

        const address = this.props.address;

        const restaurant = this.props.restaurant;

        const iframeSource = `${baseUrl}search?key=${key}&zoom=15&q=${address}${restaurant}`

        return (
            <div className="map-container">
                <iframe
                    className="restaurant-map"
                    title="restaurant-map"
                    width="100%"
                    height="320"
                    frameBorder="0"
                    src={iframeSource}></iframe>
            </div>
        );
    }
}

export default RestaurantMap;