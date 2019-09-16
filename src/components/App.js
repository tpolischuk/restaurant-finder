import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import RestaurantList from './RestaurantList';

const App = () => {
    return (
        <div>
            <Header />
            <RestaurantList />
            <Footer />
        </div>

    );
};

export default App;