import React from "react";
import { RiShoppingBasket2Fill } from "react-icons/ri";

import './navBar.scss'

function NavBar() {
  return (
    <>
      <nav className="container_nav">
        <div className="icon_menu">Icon menu</div>
        <div className="search_bar">Barra de busqueda</div>
        <div className="icon_cart">Icon cart</div>
        <div className="container_menu"> Contenedor de menu</div>
        <div className="container_cart">Contenedor carrrito</div>
      </nav>
    </>
  );
}

export default NavBar;
