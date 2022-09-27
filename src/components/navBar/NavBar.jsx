import React from "react";
import { useState } from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMenuFill} from "react-icons/ri";


import './navBar.scss'

function NavBar() {
  const [menuActive,setMenuActive]=useState(true);
  const [cartActive,setCartActive]=useState(true);
  return (
    <>
      <nav className="container_nav">
        <div className="icon_menu" onClick={()=>setMenuActive(!menuActive) }><RiMenuFill/></div>
        <input className="search_bar" type="search"></input>
        <div className="icon_cart"><RiShoppingBasket2Fill/></div>
        <div className={menuActive ? 'container_menu': 'container_menu active'}> <button onClick={()=> setMenuActive(!menuActive)}></button></div>
        <div className={cartActive ? 'container_cart': 'container_cart active'}><button onClick={()=> setCartActive(!cartActive)}></button>Contenedor carrrito</div>
      </nav>
    </>
  );
}

export default NavBar;
