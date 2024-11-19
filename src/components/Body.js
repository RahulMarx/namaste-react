import { useEffect, useState } from "react";
// import { restaurantData } from "../utils/mockData";
import  RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    //State variable
    const [listofRestaurants, setlistofRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.839620129084507&lng=77.656005397439&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setlistofRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(listofRestaurants.length === 0){
        return <Shimmer/>;
    }

    return listofRestaurants.length === 0 ? (
        <Shimmer/>
    )  : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" />
                    <button>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={() => {
                        //setlistofrestaurants()

                        const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                        );
                        setlistofRestaurants(filteredList);
                    }}
                >
                Top rated restaurants

                </button>
            </div>
            <div className="res-container">
                {
                    listofRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;