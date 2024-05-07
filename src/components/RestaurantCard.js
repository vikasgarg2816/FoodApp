import { RESTAURANT_LOGO } from "../Utils/app.constants";

const ResturantCard = (props) => {
    const {resobj} = props;
    const {name,cuisines, avgRating,cloudinaryImageId} = resobj.info;
    const {slaString} = resobj.info.sla;
    return (
      <div className='m-4 p-4 w-[250px]' style={{backgroundColor : '#f0f0f0'}}>
          <img className='food-img' alt="Loading..." 
          src= {RESTAURANT_LOGO + cloudinaryImageId}>
          </img>
          <h3 className="font-bold">{name}</h3>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{avgRating}</h4>
          <h4>{slaString}</h4>
      </div>
    )
  }


// Below is Higher order component which takes a component and performs some task using
// that component and return a new component
export const resCardwithDiscountBadge = (RestaurantCard) =>{
  return (props) =>{
    return (
      <div>
         <label className="absolute bg-slate-400 font-bold">{props.resobj.info.aggregatedDiscountInfoV3.header+" "+props.resobj.info.aggregatedDiscountInfoV3.subHeader}</label>
          <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default ResturantCard;