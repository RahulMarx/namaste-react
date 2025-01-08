import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    
    const[resInfo,setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.839620129084507&lng=77.656005397439&restaurantId=393841&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo === null)
        return <Shimmer />

    const{ name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;