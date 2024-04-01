import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Navbar.scss';

import img from "../../logo.png";

import Cart from '../Cart/Cart.jsx';

const Navbar = () => {

  const [openCart, setOpenCart] = useState(false);
  const products = useSelector(state => state.Cart.products);


  return (
    <div className="navbar">
      <div className="wrapper">   
        <div className="left">

          <div className="item">
            <img src={img} alt="" />
          </div>

          <div className="item">
            <Link className="link" to="/products/1" >Men</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2" >Women</Link>
          </div>
          
          <div className="item">
            <Link className="link" to="/products/3" >Children</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/4" >Accessories</Link>
          </div>

        </div>
        {/*
        <div className="center">
            <Link className="link" to="/">Hopey</Link>
        </div> */}

        <div className="right">

          <div className="item">
            <Link className="link" to="/" >Home</Link>
          </div>

          <div className="item">
            <Link className="link" to="#About" >About</Link>
          </div>

          <div className="item">
            <Link className="link" to="#Contact" >Contact</Link>
          </div>

          <div className="item">
            <Link className="link" to="#Stores" >Stores</Link>
          </div>

          <div className="icons">

            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />

            <div className="cart-icon" onClick={(e)=>setOpenCart(!openCart)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>

          </div>
          
        </div>
      </div>
      {openCart && <Cart/>}
    </div>
  )
}

export default Navbar