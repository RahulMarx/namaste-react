import { useState } from "react";
// import { restaurantData } from "../utils/mockData";
import  RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    //State variable
    const [listofRestaurants, setlistofRestaurants] = useState(resList);

    // let listofrestaurantsJS = [
    //     {
    //         "info": {
    //         "id": "413481",
    //         "name": "Chinese Wok",
    //         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //         "locality": "HAL 2nd Stage",
    //         "areaName": "Indiranagar",
    //         "costForTwo": "₹250 for two",
    //         "cuisines": [
    //             "Chinese",
    //             "Asian",
    //             "Tibetan",
    //             "Desserts"
    //         ],
    //         "avgRating": 4.1,
    //         "parentId": "61955",
    //         "avgRatingString": "4.1",
    //         "totalRatingsString": "1K+",
    //         "promoted": true,
    //         "adTrackingId": "cid=15302503~p=2~adgrpid=15302503#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=413481~eid=525970ee-c595-499a-8de3-fdc477245751~srvts=1721461418038~collid=115117",
    //         "sla": {
    //             "deliveryTime": 38,
    //             "lastMileTravel": 4.2,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "35-40 mins",
    //             "lastMileTravelString": "4.2 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //         },
    //         "availability": {
    //             "nextCloseTime": "2024-07-21 02:00:00",
    //             "opened": true
    //         },
    //         "badges": {
                
    //         },
    //         "isOpen": true,
    //         "type": "F",
    //         "badgesV2": {
    //             "entityBadges": {
    //             "imageBased": {
                    
    //             },
    //             "textBased": {
                    
    //             },
    //             "textExtendedBadges": {
                    
    //             }
    //             }
    //         },
    //         "aggregatedDiscountInfoV3": {
    //             "header": "ITEMS",
    //             "subHeader": "AT ₹199"
    //         },
    //         "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //             "lottie": {
                    
    //             },
    //             "video": {
                    
    //             }
    //             }
    //         },
    //         "reviewsSummary": {
                
    //         },
    //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         "restaurantOfferPresentationInfo": {
                
    //         },
    //         "externalRatings": {
    //             "aggregatedRating": {
    //             "rating": "3.5",
    //             "ratingCount": "100+"
    //             },
    //             "source": "GOOGLE",
    //             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //         },
    //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
            
    //         },
    //         "cta": {
    //         "link": "https://www.swiggy.com/restaurants/chinese-wok-hal-2nd-stage-indiranagar-bangalore-413481",
    //         "type": "WEBLINK"
    //         }
    //     },
    //     {
    //         "info": {
    //         "id": "436451",
    //         "name": "Chowman",
    //         "cloudinaryImageId": "ee11c6725be7e634e8f8fc2bde6308b0",
    //         "locality": "Ashwath Nagar",
    //         "areaName": "Marathahalli",
    //         "costForTwo": "₹700 for two",
    //         "cuisines": [
    //             "Chinese",
    //             "Asian",
    //             "Thai",
    //             "Oriental",
    //             "Burmese",
    //             "Tibetan"
    //         ],
    //         "avgRating": 4.3,
    //         "parentId": "266",
    //         "avgRatingString": "4.3",
    //         "totalRatingsString": "10K+",
    //         "sla": {
    //             "deliveryTime": 49,
    //             "lastMileTravel": 7.3,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "45-50 mins",
    //             "lastMileTravelString": "7.3 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //         },
    //         "availability": {
    //             "nextCloseTime": "2024-07-20 17:00:00",
    //             "opened": true
    //         },
    //         "badges": {
    //             "imageBadges": [
    //             {
    //                 "imageId": "Rxawards/_CATEGORY-Chinese.png",
    //                 "description": "Delivery!"
    //             }
    //             ]
    //         },
    //         "isOpen": true,
    //         "type": "F",
    //         "badgesV2": {
    //             "entityBadges": {
    //             "imageBased": {
    //                 "badgeObject": [
    //                 {
    //                     "attributes": {
    //                     "description": "Delivery!",
    //                     "imageId": "Rxawards/_CATEGORY-Chinese.png"
    //                     }
    //                 }
    //                 ]
    //             },
    //             "textBased": {
                    
    //             },
    //             "textExtendedBadges": {
                    
    //             }
    //             }
    //         },
    //         "aggregatedDiscountInfoV3": {
    //             "header": "30% OFF",
    //             "subHeader": "UPTO ₹75"
    //         },
    //         "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //             "lottie": {
                    
    //             },
    //             "video": {
                    
    //             }
    //             }
    //         },
    //         "reviewsSummary": {
                
    //         },
    //         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //         "restaurantOfferPresentationInfo": {
                
    //         },
    //         "externalRatings": {
    //             "aggregatedRating": {
    //             "rating": "4.2",
    //             "ratingCount": "100+"
    //             },
    //             "source": "GOOGLE",
    //             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //         },
    //         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         },
    //         "analytics": {
            
    //         },
    //         "cta": {
    //         "link": "https://www.swiggy.com/restaurants/chowman-ashwath-nagar-marathahalli-bangalore-436451",
    //         "type": "WEBLINK"
    //         }
    //     },
    // ];
    return (
        <div className="body">
            <div className="filter">
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