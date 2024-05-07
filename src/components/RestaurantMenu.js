import Shimmer from "./Shimmer";
import { RESTAURANT_LOGO, MENU_API } from "../Utils/app.constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const {resid} = useParams();

    const resmenuList = useRestaurantMenu(resid);

    if(resmenuList.length === 0){
        return <Shimmer/>
    }

    const {name,cuisines} = resmenuList?.data?.cards[2]?.card?.card?.info;
    //const {minDeliveryTime, maxDeliveryTime} = resmenuList?.data?.cards[2]?.card?.card?.info?.sla;
    // let itemCards = resmenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].hasOwnProperty("itemCards") ? resmenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards : resmenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories = resmenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    )
    //console.log(categories);

    return (
        <div className="text-center">
            <h1 className="p-1 m-1 font-bold text-2xl">{name}</h1>
            <p className="font-bold">{cuisines.join(',')}</p>
            {categories.map((itemCard) => <RestaurantCategory data={itemCard.card.card}/>)}
        </div>
    )
}

export default RestaurantMenu;