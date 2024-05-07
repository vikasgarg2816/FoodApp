import { useState } from "react";

const withCategoryItemList = (ItemList) => {
    return(props) => {
        const [keyMapper, setkeyMapper] = useState([props.categories.length].fill(false));
        console.log(props);
        const toggle = (index) =>{
            setkeyMapper(()=>{
                let arr = [...keyMapper]
                arr[index] = !arr[index];
                return arr;
            })
        }
        const handleItemList = (index) =>{
            toggle(index);
         
        }
        return (
            <div>
                {props.categories.map((category,index) => (
                    <div key={category.title.slice(2)+index}>
                         <div className="flex justify-between shadow-sm border-b-2 border-gray-200">
                            <h2 className="font-bold text-sm m-2">{category.title} ({category.itemCards.length})</h2>
                            <span className="cursor-pointer" onClick={()=>handleItemList(index)}>{"⬇"}</span>
                        </div>
                        { keyMapper[index] && <ItemList card = {category}/>}
                    </div>
                ))}
            </div>
        )
    }
}

export default withCategoryItemList;