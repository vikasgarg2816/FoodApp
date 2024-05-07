import { useState } from "react";
import { LOGO_URL } from "../Utils/app.constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";


const Header = () =>{

    const [Headerlogin, setHeaderLogin] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
      <div className='flex justify-between bg-pink-100 shadow-lg'>
        <div className='logo-container'>
          <img className='w-48' alt="loading" src = {LOGO_URL}></img>
        </div>
        <div className='nav-items'>
          <ul className="flex m-4 p-4">
            <li className= "px-4">
              {onlineStatus?"✅":"🔴"}
            </li>
            <li className="px-4 font-medium hover:text-red-500"><Link to ="/">Home</Link></li>
            <li className="px-4 font-medium hover:text-red-500"><Link to="/about">About Us</Link></li>
            <li className="px-4 font-medium hover:text-red-500"><Link to='/contact'>Contact Us</Link></li>
            <li className="px-4 font-medium hover:text-red-500"><Link to='/grocery'>Grocery Store</Link></li>
            <button className="font-medium hover:text-red-500 " onClick={()=>{
              Headerlogin === 'Login'? setHeaderLogin("Logout") : setHeaderLogin("Login")
            }}>{Headerlogin}</button>
          </ul>
      
        </div>
       
      </div>
    )
  }

  export default Header;