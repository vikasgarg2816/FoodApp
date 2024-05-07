import { useState, useEffect } from "react";
import { MENU_API } from "./app.constants";
const useRestaurantMenu = (resid) => {
  const [resmenuList, setresmenuList] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    setresmenuList(json);
  };

  return resmenuList;
};

export default useRestaurantMenu;
