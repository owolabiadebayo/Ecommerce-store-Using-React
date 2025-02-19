import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice'
import {addToFavourite} from '../redux/cartSlice'

const Product = ({item}) => {
  const {image,description,category,price,title } = item
  const dispatch = useDispatch();
const [hoverEffects , setHoverEffects]=useState(' opacity-0')

const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

  function handleHoverEnter() {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

  function handleHoverExit(){
    setHoverEffects(' opacity-0')
    }
  return (
    <div className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
      <img src={image} alt="product" />
      <div className={`flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` + hoverEffects}>
        <button className={iconStyle} onClick={() => 
    dispatch(addToCart({
      description, category, title, image, price
    }))
  }>
          <ShoppingCartOutlined />
    </button>
        <button className={iconStyle} onClick={() => 
    dispatch(addToFavourite({
      description, category, title, image, price
    }))
  }>
          <FavoriteBorderOutlined />
        </button>
        <button className={iconStyle}>
          <SearchOutlined />
        </button>
      </div>
    </div>
  );
};

export default Product;
