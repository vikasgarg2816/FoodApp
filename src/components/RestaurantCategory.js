import ItemList from "./ItemList";
import { useState } from "react";
import withCategoryItemList from "./withCategoryItemList";
const RestaurantCategory = ({ data }) => {
  const [showItems, setshowItems] = useState(false);
  const handle = () => {
    setshowItems(!showItems);
  };
  const ItemListWithCategory = withCategoryItemList(ItemList);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4  items-center shadow-xl">
        <div className="flex justify-between border-b-2 border-gray-200 shadow-sm items-center">
          <span className="font-bold m-2 text-lg font-mono">{data.title}</span>
          {data?.itemCards ? (
            <span className="cursor-pointer" onClick={handle}>
              {"⬇"}
            </span>
          ) : (
            ""
          )}
        </div>
        <div>
          {data?.categories ? (
            <ItemListWithCategory
              categories={data?.categories}
              showItems={showItems}
              handle={handle}
            />
          ) : (
            showItems && <ItemList card={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
