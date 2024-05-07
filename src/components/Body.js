import ResturantCard, { resCardwithDiscountBadge } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [inputtext, setInputText] = useState("");

  const [filterlist, setfilterlist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6425496&lng=76.8173359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterlist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const ResCardWithDiscount = resCardwithDiscountBadge(ResturantCard);

  if (onlineStatus === false) {
    return (
      <div>
        <h1> You are Offline!!! Please check your internet Connection</h1>
      </div>
    );
  }

  if (listOfRestaurant?.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  if (filterlist?.length === 0) {
    return <div>OOPS!!!! Not found......</div>;
  }

  const handleinput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="body">
      <div className="filter">
        <input
          className="border border-solid border-black m-2 mt-4 p-1"
          value={inputtext}
          onChange={handleinput}
          type="text"
        />
        <button
          className="px-4 py-2 m-2 rounded-lg font-semibold bg-green-100"
          onClick={() => {
            setfilterlist(
              listOfRestaurant.filter((restaurant) =>
                restaurant?.info?.name.includes(inputtext)
              )
            );
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 m-2 rounded-lg font-semibold bg-green-100"
          onClick={() => {
            setfilterlist(
              listOfRestaurant.filter((res) => {
                return res.info?.avgRating > 4.2;
              })
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterlist?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <ResCardWithDiscount resobj={restaurant} />
            ) : (
              <ResturantCard resobj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
