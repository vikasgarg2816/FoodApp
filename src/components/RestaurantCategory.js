import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data}) => {
    console.log(data);
    //console.log(data?.categories ? (data?.categories?.map((cat)=> cat.title)):" ");
    const [showItems, setshowItems] = useState(false);
    const handle = ()=>{
        setshowItems(!showItems);
    }
    return (
        <div>        
            <div className="w-6/12 mx-auto my-4  items-center shadow-xl">
                <div className="flex justify-between border-b-2 border-gray-200 shadow-sm items-center cursor-pointer" 
                    >
                    <span className="font-bold m-2 text-lg font-mono">{data.title}</span>
                    {data?.itemCards ?<span onClick={handle}>{"⬇"}</span> : ""}    
                </div>
                <div>
                    {!data?.categories && showItems? <ItemList card ={data}/> : ""} 
                </div>  

            </div>
            {data?.categories && 
                (data?.categories?.map((cat,index)=> 
                <div key={index} className=" w-6/12 m-auto shadow-xl">
                    <div className="flex justify-between shadow-sm border-b-2 border-gray-200 cursor-pointer"
                        >
                        <h2 className="font-bold text-sm m-2">{cat.title} ({cat.itemCards.length})</h2>
                        <span onClick={handle}>{"⬇"}</span>
                    </div>
                    <div>{showItems && <ItemList card ={cat}/>}</div>
                </div>
                ))
            }
        
        </div>
    )
}

export default RestaurantCategory;