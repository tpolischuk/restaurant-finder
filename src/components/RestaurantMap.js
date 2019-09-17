import React from 'react';

class RestaurantMap extends React.Component {

    render() {

        const baseUrl = 'https://www.google.com/maps/embed/v1/';

        const key = 'AIzaSyBidT_Cz8djhXm8ngMM1-4oAqCWT0iwh24';

        const address = this.props.address;

        const iframeSource = `${baseUrl}search?key=${key}&q=${address}`

        return (
            <div style={{ height: '450px', width: '450px' }}>
                <iframe
                    title="restaurant-map"
                    width="600"
                    height="450"
                    frameBorder="0"
                    src={iframeSource}></iframe>
            </div>
        );
    }

}

export default RestaurantMap;