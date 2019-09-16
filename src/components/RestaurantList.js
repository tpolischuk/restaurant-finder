import React from 'react';
import RestaurantItem from './RestaurantItem';

class RestaurantList extends React.Component {

    render() {
        return (
            <div className="restaurant-list">
                <RestaurantItem
                    restaurantName="Hopdoddy Burger Bar"
                    categoryType="Burgers"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png"
                />
                <RestaurantItem
                    restaurantName="Pappadeaux Seafood Kitchen"
                    categoryType="Seafood"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pappadeaux.png"
                />
                <RestaurantItem
                    restaurantName="Yard House"
                    categoryType="Tap House"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/yardhouse.png"
                />
                <RestaurantItem
                    restaurantName="Hopdoddy Burger Bar"
                    categoryType="Burgers"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png"
                />
                <RestaurantItem
                    restaurantName="Pappadeaux Seafood Kitchen"
                    categoryType="Seafood"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pappadeaux.png"
                />
                <RestaurantItem
                    restaurantName="Yard House"
                    categoryType="Tap House"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/yardhouse.png"
                />
                <RestaurantItem
                    restaurantName="Hopdoddy Burger Bar"
                    categoryType="Burgers"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png"
                />
                <RestaurantItem
                    restaurantName="Pappadeaux Seafood Kitchen"
                    categoryType="Seafood"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pappadeaux.png"
                />
                <RestaurantItem
                    restaurantName="Yard House"
                    categoryType="Tap House"
                    backgroundImageURL="http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/yardhouse.png"
                />


            </div>
        );
    }

}

export default RestaurantList;